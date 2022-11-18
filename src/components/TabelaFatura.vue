<template>
    <div id="modal" class="modal">
        <div class="modal-content">
        <h5>Pagamento da fatura</h5>
        <p>{{ mensagemResposta }}</p>
        </div>
        <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Fechar</a>
        </div>
    </div>

    <ul class="collapsible acordion">
        <li>
            <div class="collapsible-header"><i class="material-icons">filter_drama</i>Faturas</div>
            <div class="collapsible-body">
                <div class="box-fatura" v-for="fatura in faturas" :key="fatura">
                    <div class="fatura z-depth-2">
                        <span class="item">
                           <strong>Número: </strong>{{fatura.id}}
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
    <div id="modal" class="modal">
        <div class="modal-content">
        <h5>Pagamento da fatura</h5>
        <p>{{ mensagemResposta }}</p>
        </div>
        <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Fechar</a>
        </div>
    </div>
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
                this.mensagemResposta = response.data[0]
            })
            .catch(error => {
                this.mensagemResposta = error.response.data.errors.errors
            })
        
            let elem = document.getElementById('modal');
            let instance = M.Modal.getInstance(elem, {dismissible: true});
            instance.open()
            
            this.$emit('pagarFatura')
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