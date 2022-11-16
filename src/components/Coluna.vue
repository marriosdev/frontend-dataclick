<template>
    <li class="collection-item" id="{id}">
        <div>{{nome}}
            <a href="#!" class="secondary-content"> 
                <router-link :to="`${pagina}?id=${id}`" :idItem="id"> 
                    <i class="material-icons">arrow_forward</i>
                </router-link>
            </a>
        </div>
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
