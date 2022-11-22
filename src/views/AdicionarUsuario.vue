<template>
  <div class="container">
    <div class="form">
      <div class="container">
        <h5>Adicionar usuário</h5>

        <Alerta
          v-if="erros.name != undefined"
          :mensagem="erros.name[0]"
          :tipo="'erro'"
        />
        <Alerta
          v-if="erros.email != undefined"
          :mensagem="erros.email[0]"
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
          :label="'Nome do usuário'"
        />
        <Input :id="'email'" :type="'text'" v-model="email" :label="'Email'" />
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
  name: "AdicionarUsuario",

  components: {
    Input,
    Alerta,
  },
  data() {
    return {
      nome: "",
      email: "",
      erros: [],
      sucesso: false,
    };
  },
  methods: {
    async submit() {
      this.api
        .post("api/user", {
          name: this.nome,
          email: this.email,
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
