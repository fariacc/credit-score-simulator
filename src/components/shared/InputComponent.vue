<template>
  <div :class="classediv">
    <label :for="labelinput" class="control-label text-left">{{ label }}</label>
    <input @input="$emit('input', $event.target.value)" :class="classeinput" :value="value" :type="tipoinput"
    :v-model="vmodel" :name="name" :id="idinput"/>
  </div>
</template>

<script>
  export default {
    name: 'input-component',
    props: {
      value: null, classediv: String, labelinput: String, label: String, classeinput: String,
      tipoinput: String, vmodel: String, name: String, idinput: String
    }
  }
</script>

<style lang="scss">
  label{
    text-align: left;
    color: #213345;
    margin-bottom: 0!important;
    font-size: 0.9rem;
    width: 100%;
  }
  .custom-file-control:valid{
    background-image: linear-gradient(0deg,#41698E 2px,rgba(213,0,0,0) 0),linear-gradient(0deg,rgba(0,0,0,.26) 1px,transparent 0);
    color: #213345;
    font-weight: lighter;
  }
  .form-control{
    background-image: linear-gradient(0deg,#41698E 1px,rgba(213,0,0,0) 0),linear-gradient(0deg,rgba(0,0,0,.20) 1px,transparent 0);
    border: 0!important;
    box-shadow: none!important;
    padding-left: 0!important;
    padding-top: 0!important;
    &:focus{
      background-image: linear-gradient(0deg,#41698E 2px,rgba(213,0,0,0) 0),linear-gradient(0deg,rgba(0,0,0,.26) 1px,transparent 0);
      padding-left: 0;
    }
  }
</style>
