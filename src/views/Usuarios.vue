<template>
  <div class="container">
    <h4>Clubes</h4>
    <BotaoCriar :nomePagina="'adicionarUsuario'" />
    <Tabela :pagina="'detalhesUsuario'" :itens="usuarios" />
  </div>
</template>

<script>
import BotaoCriar from "../components/BotaoCriar.vue";
import Tabela from "../components/Tabela.vue";

export default {
  name: "Usuarios",

  components: {
    BotaoCriar,
    Tabela,
  },

  data() {
    return {
      usuarios: Array,
    };
  },

  methods: {
    async buscarUsuarios() {
      this.api.get("api/user").then((usuarios) => {
        this.usuarios = usuarios.data;
      });
    },
  },

  mounted() {
    this.buscarUsuarios();
  },
};
</script>
