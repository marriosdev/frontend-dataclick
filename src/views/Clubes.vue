<template>
    <div class="container">
        <h4>Clubes</h4>
        <BotaoCriar :nomePagina="'adicionarClube'"/>
        <Tabela  :pagina="'detalhesClube'" :itens="clubes"/>
    </div>
</template>

<script>

import BotaoCriar from '../components/BotaoCriar.vue'
import Tabela from '../components/Tabela.vue'

export default {
    name: 'Clubes',
    
    components: {
        BotaoCriar,
        Tabela
    },

    data() {
        return {
            clubes: Array
        }
    },

    methods: {
        async buscarClubes() {
            this.api.get('api/club').then(clubes => {
                this.clubes = clubes.data
            })
        },
    },

    mounted() {
        this.buscarClubes()
    }
}
</script>
