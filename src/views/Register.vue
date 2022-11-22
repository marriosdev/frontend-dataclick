<template>
  <div class="container">
    <div class="form">
        <div class="header">
            <h5>Cadastro</h5>
        </div>
        <Input :id="'nome'" :type="'text'" v-model="nome" :label="'Nome'" />
        <Input :id="'email'" :type="'text'" v-model="email" :label="'E-mail'" />
        <Input :id="'password'" :type="'text'" v-model="senha" :label="'Senha'" />
        <a class="waves-effect waves-light btn-small"><i class="material-icons right">send</i>button</a>
    </div>
  </div>
</template>

<script>
import Input from '../components/Input.vue';

export default {
    name: 'Register',

    components: {
        Input        
    },

    data() {
        return {
            nome: '',
            email: '',
            senha: ''
        }
    },

    methods: {
        async entrar() {
            this.api.post('api/signature', {
                name: this.nome,
                email: this.email,
                password: this.senha
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
        M.AutoInit()
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