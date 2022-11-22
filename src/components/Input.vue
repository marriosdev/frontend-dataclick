<template>
  <div class="input-field">
    <input
      :id="id"
      :type="type"
      class="validate"
      :value="modelValue ? modelValue : value"
      @change="retornaValor"
    />
    <label :for="id" :class="value ? 'active' : ''"> {{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "Input",

  props: {
    type: "",
    label: "",
    id: "",
    value: null,
  },

  data() {
    return {
      modelValue: null,
    };
  },

  methods: {
    async retornaValor(event) {
      this.modelValue = event.target.value;
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>