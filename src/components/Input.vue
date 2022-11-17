<template>
    <div class="input-field">
        <input 
            :id="id" 
            :type="type" 
            class="validate" 
            :value="modelValue"
            @change="retornaValor"
        >
        
        <label :for="id"> {{label}}</label>
    </div>
</template>

<script>
export default {
    name: 'Input',

    props: {
        type: '',
        label: '',
        id: '',
    },

    data() {
        return {
            modelValue: ''
        }
    },

    methods: {
        async retornaValor(event) {
            this.modelValue = event.target.value
            this.$emit('update:modelValue',event.target.value)
        }
    }
}
</script>