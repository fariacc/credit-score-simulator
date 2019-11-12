<template>
  <button :type="tipo" :class="classe">{{ rotulo }}</button>
</template>

<script>
  export default {
    name: 'button-component',
    props: ['tipo', 'rotulo', 'classe']
  }
</script>

<style lang="scss">
  .social-net{ /* global button class */
    position: relative;
    cursor: pointer;
    width: 3vw;
    height: 6.5vh;
    border: none;
    box-shadow: 0 2px 2px #999;
    color: #fff!important;
    font-size: 1.6rem;
    border-radius: 25px;
    margin-bottom: 1vh;
    margin-left: 0.5vw;
    margin-right: 0.5vw;
  }
  .facebookBtn{
    background: #4060A5;
    &:hover{
      color: #4060A5!important;
      background: #fff;
      border: 1.5px solid #4060A5;
    }
  }
  .googleBtn{
    background: #e64522;
    &:hover{
      color: #e64522!important;
      background: #fff;
      border: 1.5px solid #e64522;
    }
  }
  .btn.btn-default {
    background-color: #41698E;
    padding: 0.25em 0.4em;
    border-radius: 0px!important;
    color: #ffffff;
    width: max-content;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    &:hover{
      color: #ffffff;
      background-color: #213345;
    }
  }
  a{
    color: #41698E;
  }
  .btn.btn-default-2{
    background-color: transparent;
    color: #213345;
    margin-top: 0;
    font-weight: 600;
  }
  .btn.btn-close{
    color: #ffffff;
    margin-top: 0;
    font-weight: 600;
    &:hover{
      color: #ffffff;
    }
  }
  .btn.btn-opcao{
    text-transform: uppercase;
    font-size: 0.9em;
    font-weight: bold;
  }
  .btn.btn-outline {
    background-color: #41698E;
    padding: 0.25em 0.4em;
    border-radius: 0px!important;
    border: 1px solid #41698E;
    color: #ffffff;
    width: max-content;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    font-weight: 600;
    &:hover{
      color: #ffffff;
      background-color: #213345;
    }
  }
</style>
