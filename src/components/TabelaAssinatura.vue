<template>
    <ul class="collapsible acordion">
        <li>
            <div class="collapsible-header"><i class="material-icons">assignment_ind</i>Assinatura</div>
            <div class="collapsible-body">
                <div>
                    <span>
                       <strong> Assinatura: </strong>{{assinatura.clubname}}
                    </span>
                    <br>
                    <span>
                       <strong> Status: </strong>{{assinatura.status_signature}}
                    </span>
                    <br>
                    <span>
                       <strong> Data de assinatura: </strong>{{assinatura.created_at.split("T")[0] }}
                    </span>
                    <TabelaFatura :faturas="faturas" />
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
    import TabelaFatura from './TabelaFatura.vue'
    export default {

        name: 'TabelaAssinatura',
        components: {
            TabelaFatura
        },
        
        data() {
            return {
                faturas: ""
            }
        },

        props: {
            assinatura: ''
        },

        methods: {
            async buscarFaturas() {
                this.api.get(`api/signature/${this.assinatura.id}`).then(response => {
                    this.faturas = response.data[1].invoices
                })
            }
        },

        mounted() {
            this.buscarFaturas()
            M.AutoInit()
        }
    }
</script>