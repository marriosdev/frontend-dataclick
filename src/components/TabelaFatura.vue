<template>
    <ul class="collapsible acordion">
        <li>
            <div class="collapsible-header"><i class="material-icons">payment</i>Faturas</div>
            <div class="collapsible-body">
                <div class="box-fatura" v-for="fatura in faturas" :key="fatura">
                    <div class="fatura z-depth-2">
                        <span class="item">
                           <strong>Nº: </strong>{{fatura.id}}
                        </span>
                        <br>
                        <span class="item">
                           <strong>Status: </strong>{{fatura.status}}
                        </span>
                        <br>
                        <span class="item">
                           <strong>Vencimento: </strong>{{fatura.due_date}}
                        </span>
                        <br>
                        <span class="item" v-if="fatura.status != 'PAGO'">
                            <a class="waves-effect waves-light btn-small"  @click="pagar(fatura.id)"><i class="material-icons left">payment</i>Pagar</a>
                        </span>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>

import Alerta from './Alerta.vue' 

export default {
    name: 'TabelaFatura',
    props: {
        faturas: '',
        onPagarFatura: ''
    },
    emits: [
        'onPagarFatura'
    ],
    data() {
        return {
            erroPagamento: false,
            mensagemResposta: ''
        }
    },
    components: {
        Alerta
    },

    methods: {
        async pagar(id) {
            this.api.post(`api/invoice/pay/${id}`)
            .then(response => {
                this.$emit('pagarFatura', {titulo: "Pagamento da fatura", mensagem: response.data[0]})
            })
            .catch(error => {
                this.$emit('pagarFatura', {titulo: "Pagamento da fatura", mensagem: error.response.data.errors.errors})
            })
        }
    },

    mounted() {
        M.AutoInit()
    }
}
</script>

<style scoped>
    .fatura {
        padding: 10px;
        border: 0.1rem solid rgb(230, 230, 230);
        margin-bottom: 10px;
    }
</style>