<template>
  <div :class="classediv">
    <label :for="labelselect" class="control-label">{{ label }}</label>
    <select @input="event => { $emit('input', event.target.value) }" class="custom-select" :name="name" required>
      <option selected disabled>{{ rotulo }}</option>
      <option v-for="(option, texto) in options" :value="option">{{ texto }}</option>
    </select>
  </div>
</template>

<script>
  export default {
    name: 'select-component',
    props: {
      value: null, classediv: String, labelselect: String, label: String,
      label: String, rotulo: String, name: String, options: Object
    }
  }
</script>

<style lang="scss">
  .custom-select{
    border: 0!important;
    border-bottom: 1px solid #41698E!important;
    padding-left: 1px!important;
    border-radius: 0px!important;
    &:focus{
      border: 0!important;
      border-bottom: 2px solid #41698E!important;
    }
  }
</style>
