<template>
    <div class="menu">
        <div>
            <p class='titulo'>Detalhes</p>
        </div>
        
        <div class="container" v-if="sucessoExclusao">
            <div class="mensagem" >
                <Alerta :tipo="'sucesso'" :mensagem="'Excluído com sucesso!'" />    
            </div>
        </div>

        <div class="box-button" v-if="!sucessoExclusao">
            <ul>
                <router-link :to="paginaEdicao">                 
                    <li class="waves-effect waves-light btn blue button-menu" v-on:click="editar()">
                        <i class="material-icons left">
                            edit
                        </i>Editar
                    </li>
                </router-link>

                <li class="waves-effect waves-light btn red button-menu" v-if="!botaoConfirma" v-on:click="excluir()"><i class="material-icons left">delete</i>Excluir</li>
                <li class="waves-effect waves-light btn orange button-menu" v-on:click="excluirDefinitivo()" v-if="botaoConfirma" ><i class="material-icons left">report_problem</i>Confirmar</li>
            </ul>
        </div>

        <div class="box-button" v-if="sucessoExclusao">
            <ul>
                <router-link :to="paginaAtras" > 
                    <li class="waves-effect waves-light btn blue button-menu">
                        Voltar
                        <i class="material-icons left">arrow_back</i>
                    </li>
                </router-link>
            </ul>
        </div>
    </div>
    <hr>
</template>

<script>

    import Alerta from './Alerta.vue'

    export default {

        name: 'MenuDetalhes',
        data() {
            return {
                botaoConfirma: false,
                sucessoExclusao: false
            }
        },
        components: {
            Alerta
        },
        
        props: {
            paginaEdicao: '',
            pagina: '',
            paginaAtras: ''
        },
        methods: {
            async editar() {
            },

            async excluir() {
                this.botaoConfirma = true
            },

            async excluirDefinitivo() {
                const id = new URLSearchParams(window. location. search).get("id")
                this.api.delete(`api/${this.pagina}/${id}`)
                    .then(response => {
                        this.sucessoExclusao = true
                        }
                    )
                    .catch(erro => {
                        console.log("deu erro")
                    })
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
    .mensagem {
        padding: 10px;
        font-size: 16pt;
        text-align: center;
    }
</style>