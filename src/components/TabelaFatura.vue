<template>
    <ul class="collapsible acordion">
        <li>
            <div class="collapsible-header"><i class="material-icons">filter_drama</i>Faturas</div>
            <div class="collapsible-body">
                <div class="box-fatura" v-for="fatura in faturas" :key="fatura">
                    <div class="fatura z-depth-2">
                        <span class="item" v-if="erroPagamento">
                            <Alerta :tipo="'erro'" :mensagem="mensagemResposta" />
                        </span>
                        <br>
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
                            <a class="waves-effect waves-light btn-small" @click="pagar(fatura.id)"><i class="material-icons left">payment</i>Pagar</a>
                        </span>
                    </div>
                </div>
            </div>
        </li>
    </ul>
    <!-- Modal Structure -->
    <div id="modal1" class="modal">
        <div class="modal-content">
        <h4>Modal Header</h4>
        <p>A bunch of text</p>
        </div>
        <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
    </div>
</template>

<script>

import Alerta from './Alerta.vue' 

export default {
    name: 'TabelaFatura',
    props: {
        faturas: '',
    },
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
                    this.sucessoExclusao = true
                    this.mensagemResposta = response.response.data
                    }
                )
                .catch(erro => {
                    this.erroPagamento = true

                    this.mensagemResposta = erro.response
                })

                document.addEventListener('DOMContentLoaded', function() {
                let elems = document.querySelectorAll('.modal');
                let instances = M.Modal.init(elems, options);
                instances.open()
            });
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