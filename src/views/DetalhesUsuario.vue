<template>
    <div class="container">
        <MenuDetalhes :pagina="'user'" :paginaAtras="'usuarios'" />
        <div class="container datalhes">
            <ItemDetalhe :titulo="'Nome'" :dados="nome" :icone="'done'"/>
            <ItemDetalhe :titulo="'Criação'" :dados="criado_em" :icone="'date_range'"/>
            <ItemDetalhe :titulo="'Assinaturas'" :dados="quantidade_assinaturas" :icone="'assignment_ind'"/>
            <div v-for="assinatura in assinaturas" :key="assinatura">
                <TabelaAssinatura :assinatura="assinatura"/>
            </div>
        </div>
    </div>
</template>

<script>
    import TabelaAssinatura from '../components/TabelaAssinatura.vue' 
    import MenuDetalhes from '../components/MenuDetalhes.vue'
    import ItemDetalhe from '../components/ItemDetalhe.vue'

    export default {
        name: 'DetalhesClube',

        components: {
            MenuDetalhes,
            ItemDetalhe,
            TabelaAssinatura,
        },

        data() {
            return {
                nome: '',
                assinaturas: Array,
                criado_em: '',
                quantidade_assinaturas: 0,
                assinaturas: []
            }
        },
        
        methods: {
            async buscarUsuario() {
                const id = new URLSearchParams(window. location. search).get("id")

                this.api.get(`api/user/${id}`)
                    .then(usuario => {
                        this.nome = usuario.data[0].name
                        this.quantidade_assinaturas = usuario.data[1].signatures.length
                        this.criado_em = usuario.data[0].created_at.split("T")[0]
                        this.assinaturas = usuario.data[1].signatures
                        console.log(this.assinaturas)
                    }
                )
            }
        },
        
        mounted() {
            this.buscarUsuario()
            M.AutoInit()
        }
    }
</script>

<style scoped>
    .datalhes {
        display: flex;
        flex-direction: column;
    }
</style>