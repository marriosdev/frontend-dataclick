<template>
    <li class="collection-item coluna" id="{id}">
        <div>{{nome}}
        </div>
        <router-link :to="`${pagina}?id=${id}`" :idItem="id"> 
            <button class="waves-effect waves-light blue btn">
                <i class="material-icons">arrow_forward</i>
            </button>
        </router-link>
    </li>
</template>

<script>
    export default {
        name: 'Coluna',

        props: {
            pagina: "",
            id: "",
            nome: ""
        },
    }

</script>
<style scoped>
    .coluna {
        display: flex;
        justify-content: space-between;
    }
</style>