<template>
  <router-link :to="nomePagina">
    <span class="container">
      <button class="waves-effect waves-light btn">
        <i class="material-icons left">add </i>Adicionar
      </button>
    </span>
  </router-link>
</template>

<script>
export default {
  name: "BotaoCriar",

  props: {
    nomePagina: String,
  },
};
</script>
