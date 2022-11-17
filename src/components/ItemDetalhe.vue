<template>
    <span class="item">
        <span class="header-item">
            <i class="material-icons">{{ icone }}</i>
            <span class="titulo"><strong>{{ titulo }}</strong></span> 
        </span>
        <span class="dados">
            {{ dados }}
        </span>
    </span>
</template>

<script>

export default {
    name: 'ItemDetalhe',

    data() {
        return {
            clubes: Array
        }
    },
    props: {
        titulo: '',
        dados: '',
        icone: ''

    }
}
</script>

<style scoped>
    .item {
        margin-bottom: 10px;
        display: flex;
        width: 100%;
        align-items: center;
        font-size: 14pt;
        justify-content: space-between;
    }
    .titulo {
        margin-right: 20px;
    }
    .header-item {
        display: flex;
    }
</style>
