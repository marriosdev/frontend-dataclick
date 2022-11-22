<template>
  <div class="container">
    <div class="form">
      <div class="container">
        <h5>Adicionar clube</h5>

        <Alerta
          v-if="erros.name != undefined"
          :mensagem="erros.name[0]"
          :tipo="'erro'"
        />

        <Alerta
          v-if="sucesso"
          :tipo="'sucesso'"
          :mensagem="'Adicionado com sucesso!'"
        />

        <Input
          :id="'nome'"
          :type="'text'"
          v-model="nome"
          :label="'Nome do clube'"
        />
        <div class="box-button">
          <button @click="submit" class="waves-effect waves-light btn submit">
            <i class="material-icons right">send</i>Salvar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "../components/Input.vue";
import Alerta from "../components/Alerta.vue";

export default {
  name: "AdicionarClube",

  components: {
    Input,
    Alerta,
  },
  data() {
    return {
      nome: "",
      erros: [],
      sucesso: false,
    };
  },
  methods: {
    async submit() {
      this.api
        .post("api/club", {
          name: this.nome,
        })
        .then((response) => {
          this.sucesso = true;
          this.erros = [];
        })
        .catch((error) => {
          this.sucesso = false;
          this.erros = error.response.data.errors;
        });
    },
  },
};
</script>

<style scoped>
.form {
  padding-top: 20px;
  border: 1px solid rgb(196, 196, 196);
  margin-top: 10vh;
  padding-bottom: 20px;
}
.box-button {
  text-align: center;
  width: 100%;
}
</style>
