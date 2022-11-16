<template>
    <div class="menu">
        <div>
            <p class='titulo'>Detalhes</p>
        </div>
        <div class="box-button">
            <ul>
                <li class="waves-effect waves-light btn blue button-menu" v-on:click="editar()"><i class="material-icons left">edit</i>Editar</li>
                <li class="waves-effect waves-light btn red button-menu" v-on:click="excluir()"><i class="material-icons left">delete</i>Excluir</li>
            </ul>
        </div>
    </div>
    <hr>
</template>

<script>
    export default {
        name: 'MenuDetalhes',

        props: {
            pagina: ''
        },
        methods: {
            async editar() {
                alert("editar")
                alert(this.pagina)
            },

            async excluir() {
                alert("excluir")
            }
        }
    }
</script>

<style scoped>
    .menu {
        display: flex;
        justify-content: space-between;
    }
    .titulo {
        font-size: 16pt;
    }
    .box-button{
        display: flex;
    }
    .button-menu{
        margin-left: 5px;
        margin-top: 5px;
    }
</style>