<template>
    <div class="container">
        <div class="form">
            <div class="container">
                <h5>Nova assinatura</h5>
                <p>Criei uma nova assinatura entre usuário e time</p>
                <Alerta :tipo="'erro'" :mensagem="mensagemErro" v-if="!sucesso" />  
                <Alerta :tipo="'sucesso'" :mensagem="'Assinatura adicionada com sucesso!'" v-if="sucesso" /> 
                <div class="input-field col s12">
                    
                    <select v-model="usuario" class="browser-default">
                        <option value="" selected>Selecione um usuário</option>
                        <option :value="u.id" v-for="u in usuariosLista" :key="u"> {{u.name}}</option>
                    </select>

                </div>

                <div class="input-field col s12"> 
                    <select v-model="clube" class="browser-default">
                        <option value="" selected>Selecione um clube</option>
                        <option :value="c.id" v-for="c in clubesLista" :key="c"> {{ c.name }}</option>
                    </select>
                </div>

                <div class="box-button">
                    <button @click="salvar" class="waves-effect waves-light btn submit"><i class="material-icons right">send</i>Salvar</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import Alerta from '../components/Alerta.vue'

    export default {
        name: 'Assinatura',

        components: {
            Alerta
        },

        data() {
            return {
                clube: '',
                usuario: '',
                clubesLista: [],
                usuariosLista:  [],
                mensagemErro: "",
                sucesso: false
            }
        },

        methods: {
            async  buscarUsuarios() {
                this.api.get('api/user')
                .then(usuarios => {
                    this.usuariosLista = usuarios.data
                })
            },

            async  buscarClubes() {
                this.api.get('api/club')
                .then(clubes => {
                    this.clubesLista = clubes.data
                })
            },

            async salvar() {

                this.api.post('api/signature', {
                    id_user: this.usuario,
                    id_club: this.clube
                })
                .then(response => {
                    this.sucesso = true
                    this.erros = []
                })
                .catch(error => {
                    this.sucesso = false
                    this.mensagemErro = error.response.data.errors
                })
            }
        },

        mounted() {
            this.buscarUsuarios()
            this.buscarClubes()
            M.AutoInit()
        }
    }

</script>

<style scoped>
    .form {
        padding-top: 20px;
        border: 1px solid rgb(196, 196, 196);    
        margin-top: 10vh;
        padding-bottom: 20px;
    }
    .box-button{
        text-align: center;
        width: 100%;
    }
    select {
        color: rgb(95, 94, 94);
        border: 1px solid rgb(197, 197, 197);
    }
    option {
        height: 30px;
        font-size: 12pt;
        padding: 20px;
        color: rgb(95, 94, 94);
    }
</style>
