<template>
  <div class="home">
  <a class="waves-effect waves-light btn">button</a>
  </div>
</template>

<script>
  import Teste from '../components/Teste.vue'
  import Navbar from '../components/Navbar.vue'

  export default {
    name: 'Home',
    components: {
      Teste, Navbar
    },

    async mounted() {
        M.AutoInit()
    }
  }
</script>