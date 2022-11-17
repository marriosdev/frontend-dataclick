<template>
    <div class="container">
        <MenuDetalhes :pagina="'user'" :paginaAtras="'usuarios'" />
        <div class="container datalhes">
            <ItemDetalhe :titulo="'Nome'" :dados="nome" :icone="'done'"/>
            <ItemDetalhe :titulo="'Criação'" :dados="criado_em" :icone="'date_range'"/>
            <ItemDetalhe :titulo="'Assinaturas'" :dados="quantidade_assinaturas" :icone="'assignment_ind'"/>

        </div>
    </div>
</template>

<script>
    import MenuDetalhes from '../components/MenuDetalhes.vue'
    import ItemDetalhe from '../components/ItemDetalhe.vue'

    export default {
        name: 'DetalhesClube',

        components: {
            MenuDetalhes,
            ItemDetalhe
        },

        data() {
            return {
                nome: '',
                assinaturas: Array,
                criado_em: '',
                quantidade_assinaturas: 0
            }
        },
        
        methods: {
            async buscarUsuario() {
                const id = new URLSearchParams(window. location. search).get("id")

                this.api.get(`api/user/${id}`).then(usuario => {
                    this.nome = usuario.data[0].name
                    this.quantidade_assinaturas = usuario.data[1].signatures.length
                    this.criado_em = usuario.data[0].created_at.split("T")[0]

                    console.log(usuario.data)
                    }
                )
            }
        },

        mounted() {
            this.buscarUsuario()
        }
    }
</script>

<style scoped>
    .datalhes {
        display: flex;
        flex-direction: column;
    }
</style>