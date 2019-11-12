<template>
  <div :class="classediv">
    <input @change="$emit('change', valor)" @input="$emit('input', valor)" :checked="checked" :value="valor" :type="type" :name="name" :id="id" :peso="peso" v-model="checked" required/>
    <label @click="$emit('finished', peso, valor, valor)" :for="labelradio">{{ label }}</label>
  </div>
</template>

<script>
  export default {
    name: 'radio-component',
    props: {
      valor: null, classediv: String, labelradio: String, label: String, type: String, name: String, id: String, peso: Number
    },
    data(){
      return{
        checked: Boolean
      }
    },
    methods:
    {
      clearRadio(){
        this.checked = false;
      }
    }
  }
</script>

<style lang="scss">
  .perguntas{
    min-width: 80%;
    max-width: 60%;
    margin-bottom: 1vh;
    height: 5vh;
    input[type=radio] {
      display: none;
      &+label{
        font-size: 0.9rem;
        line-height: 5vh;
        color: #ffffff;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        background-color: #ec9100d2;
        border: 1px solid #ffffff;
        border-radius: 3px;
        text-shadow: 0 1px 1px rgba(0,0,0,.4);
      }
      &:checked + label {
        border: 2px solid #213345ad;
      }
    }
  }
</style>
