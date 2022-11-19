<template>
    <div class="container">
        <div class="form">
            <div class="container">
                <h5>Editar clube</h5>

                <Alerta v-if="erros.name != undefined" :mensagem="erros.name[0]" :tipo="'erro'"/>
                
                <Alerta v-if="sucesso" :tipo="'sucesso'" :mensagem="'Atualizado com sucesso!'"/>
                
                <Input :id="'nome'" :type="'text'" v-model="nome" :value="nome" :label="'Nome do clube'" />
                <div class="box-button">
                    <button @click="submit" class="waves-effect waves-light btn submit"><i class="material-icons right">send</i>Salvar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Input from '../components/Input.vue'
    import Alerta from '../components/Alerta.vue'

    export default {
        name: 'EditarClube',

        components: {
            Input,
            Alerta
        },
        data() {
            return {
                id: null,
                nome: '',
                erros: [],
                sucesso: false
            }
        },
        methods: {
            async submit() {

                this.api.patch(`api/club/${this.id}`, {
                    name: this.nome,
                })
                .then(response => {
                    this.sucesso = true
                    this.erros = []
                })
                .catch(error => {
                    this.sucesso = false
                    this.erros = error.response.data.errors
                })
            },

            async buscarClube() {
                const id = new URLSearchParams(window. location. search).get("id")
                this.id = id 
                this.api.get(`api/club/${id}`).then(clube => {
                    this.nome = clube.data[0].name
                    this.criado_em = clube.data[0].created_at.split("T")[0]
                    this.quantidade_assinaturas = clube.data[1].signatures.length
                    }
                )
            }
        },
        mounted() {
            this.buscarClube()
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
</style>
