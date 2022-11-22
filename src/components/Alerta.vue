<template>
  <div>
    <span :style="`color: ${cor}`" class="mensagem">{{ mensagem }}</span>
  </div>
</template>

<script>
export default {
  name: "Alerta",

  data() {
    cor: "";
  },

  props: {
    mensagem: "",
    tipo: "",
  },
  created() {
    const cor_erro = "rgb(255, 15, 15)";
    const cor_sucesso = "rgb(0, 192, 0)";
    if (this.tipo == "erro") {
      this.cor = cor_erro;
    } else {
      this.cor = cor_sucesso;
    }
  },
};
</script>

<style scoped>
.mensagem {
  border-radius: 0.3rem;
  padding: 0.3rem;
  margin-top: 3rem;
}
</style>