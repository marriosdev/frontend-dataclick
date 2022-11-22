<template>
  <div class="container">
    <div class="form">
        <div class="header">
            <h5>Login</h5>
        </div>
        <Alerta :tipo="'erro'" :mensagem="mensagemErro" v-if="!sucesso" />  
        <Input :id="'email'" :type="'text'" v-model="email" :label="'E-mail'" />
        <Input :id="'password'" :type="'text'" v-model="senha" :label="'Senha'" />
        <a class="waves-effect waves-light btn-small" @click="entrar"><i class="material-icons right">send</i>Entrar</a>
    </div>
  </div>
</template>

<script>

    import Input from '../components/Input.vue';
    import Alerta from '../components/Alerta.vue'
    export default {

        name: 'Login',
        
        components: {
            Input,
            Alerta   
        },

        data() {
            return {
                mensagemErro: "",
                sucesso: false,
                email: '',
                senha: ''
            }
        },
        mounted() {
            M.AutoInit()
        },
        methods: {
            async entrar() {

                this.api.post('api/auth/login', {
                    email: this.email,
                    password: this.senha
                })
                .then(response => {
                    this.sucesso = true
                    this.erros = []
                })
                .catch(error => {
                    this.sucesso = false
                    this.mensagemErro = error.response.data.message
                })
            }
        }
    }
</script>

<style scoped>
    .form{
        text-align: center;
        padding: 100px;
    }

    @media (max-width: 760px) {
       .form{
        padding: 20% 10% 0% 10%;
        }
    }
</style>

