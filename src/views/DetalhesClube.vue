<template>
  <div class="container">
    <MenuDetalhes
      :pagina="'club'"
      :paginaAtras="'clubes'"
      :paginaEdicao="`editarClube?id=${id}`"
    />
    <div class="container datalhes">
      <ItemDetalhe :titulo="'Nome'" :dados="nome" :icone="'done'" />
      <ItemDetalhe
        :titulo="'Criação'"
        :dados="criado_em"
        :icone="'date_range'"
      />
      <ItemDetalhe
        :titulo="'Assinantes'"
        :dados="quantidade_assinaturas"
        :icone="'assignment_ind'"
      />
    </div>
  </div>
</template>

<script>
import MenuDetalhes from "../components/MenuDetalhes.vue";
import ItemDetalhe from "../components/ItemDetalhe.vue";

export default {
  name: "DetalhesClube",

  components: {
    MenuDetalhes,
    ItemDetalhe,
  },

  data() {
    return {
      id: null,
      nome: "",
      assinaturas: Array,
      criado_em: "",
      quantidade_assinaturas: 0,
    };
  },

  methods: {
    async buscarClube() {
      const id = new URLSearchParams(window.location.search).get("id");
      this.id = id;
      this.api.get(`api/club/${id}`).then((clube) => {
        this.nome = clube.data[0].name;
        this.criado_em = clube.data[0].created_at.split("T")[0];
        this.quantidade_assinaturas = clube.data[1].signatures.length;
      });
    },
  },

  mounted() {
    this.buscarClube();
  },
};
</script>

<style scoped>
.datalhes {
  display: flex;
  flex-direction: column;
}
</style>