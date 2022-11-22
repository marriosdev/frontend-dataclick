<template>
  <ul class="collapsible acordion">
    <li>
      <div class="collapsible-header">
        <i class="material-icons">assignment_ind</i>{{ assinatura.club }}
      </div>
      <div class="collapsible-body">
        <div>
          <span> <strong> Nº: </strong>{{ assinatura.id }} </span>
          <br />
          <span> <strong> Assinatura: </strong>{{ assinatura.club }} </span>
          <br />
          <span> <strong> Status: </strong>{{ assinatura.status }} </span>
          <br />
          <span>
            <strong> Data de assinatura: </strong
            >{{ assinatura.created_at.split("T")[0] }}
          </span>
          <br />
          <span>
            <a
              class="waves-effect waves-light btn-small red"
              v-if="!confirmarCancelarAssinatura"
              @click="confirmarCancelamento"
              ><i class="material-icons left">cancel</i> Cancelar assinatura</a
            >
            <a
              class="waves-effect waves-light btn-small orange"
              v-if="confirmarCancelarAssinatura"
              @click="cancelarAssinatura"
              ><i class="material-icons left">cancel</i> Confirmar
              cancelamento</a
            >
          </span>

          <TabelaFatura :faturas="faturas" :onPagarFatura="pagamentoFatura" />
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import TabelaFatura from "./TabelaFatura.vue";
export default {
  name: "TabelaAssinatura",
  components: {
    TabelaFatura,
  },

  data() {
    return {
      confirmarCancelarAssinatura: false,
      faturas: "",
      mensagemPagamento: "",
    };
  },

  props: {
    onAtualizar: "",
    onAbrirModal: "",
    assinatura: "",
    titulo: "",
  },

  methods: {
    async pagamentoFatura(param) {
      this.$emit("abrirModal", {
        titulo: "Pagamento da fatura",
        mensagem: param.mensagem,
      });
      this.buscarFaturas();
    },

    async buscarFaturas() {
      this.api.get(`api/signature/${this.assinatura.id}`).then((response) => {
        this.faturas = response.data[1].invoices;
      });
    },

    async confirmarCancelamento() {
      this.confirmarCancelarAssinatura = true;
    },

    async cancelarAssinatura() {
      this.api
        .delete(`api/signature/${this.assinatura.id}`)
        .then((response) => {});
      this.$emit("atualizar");
    },
  },

  mounted() {
    this.buscarFaturas();
    M.AutoInit();
  },
};
</script>