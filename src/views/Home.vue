<template>
  <div class="container">
    <h5>Atualizar Sistema</h5>
    <p>O botão abaixo, atualiza todos os status das fatura e assinaturas do sistema. Ele pode ser usado a qualquer momento</p>
    <div class="box-button">
      <button @click="atualizar" class="waves-effect waves-light btn submit">
        <i class="material-icons right">sync</i>Atualizar
      </button>
      </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    async atualizar() {
      this.api
        .get("api/invoice/checkAll", {})
        .then((response) => {
          alert("Faturas atualizadas!")
          this.sucesso = true;
          this.erros = [];
        })
        .catch((error) => {
          this.sucesso = false;
          this.mensagemErro = error.response.data.errors;
        });

      this.api
        .get("api/signature/checkAll", {})
        .then((response) => {
          alert("Assinaturas atualizadas!")
          this.sucesso = true;
          this.erros = [];
        })
        .catch((error) => {
          this.sucesso = false;
          this.mensagemErro = error.response.data.errors;
        });
    }
  },
  async mounted() {
    M.AutoInit();
  },
};
</script>

<style scoped>
  .box-button {
    text-align: center;
  }
</style>