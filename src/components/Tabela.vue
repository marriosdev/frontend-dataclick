<template>
    <ul class="collection with-header">
        <li class="collection-header"></li>
        <div v-for="item in itens" :key="item.id">
            <Coluna :pagina="pagina" :nome="item.name" :id="item.id"/>
        </div>
    </ul>
</template>

<script>
    import Coluna from './Coluna.vue'
    export default {
        name: 'Tabela',
        components: {
            Coluna
        },
        
        props: {
            nomeTabela: String,
            itens: Array,
            pagina: ''
        },
    }
</script>
