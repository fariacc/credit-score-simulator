<template>
  <div class="alterar-cadastro">
    <navbar-interna-component></navbar-interna-component>
    <div class="col-md-12 col-lg-12">
      <div class="conta row">
        <alterar-cadastro-form-component></alterar-cadastro-form-component>
        <alterar-senha-form-component></alterar-senha-form-component>
      </div>
    </div>
  </div>
</template>

<script>
  import NavbarInternaComponent from '../shared/NavbarInternaComponent.vue'
  import HeaderComponent from '../shared/HeaderComponent.vue'
  import AlterarCadastroFormComponent from './AlterarCadastroFormComponent.vue'
  import AlterarSenhaFormComponent from './AlterarSenhaFormComponent.vue'
  import register from '../register/RegisterFormComponent.vue'
  export default {
    name: 'alterar-cadastro-template',
    components: {
      NavbarInternaComponent, HeaderComponent, AlterarCadastroFormComponent, AlterarSenhaFormComponent
    }
  }
</script>

<style lang="scss">
  .alterar-cadastro{
    .conta{
      width: 60%;
      height: 70%;
      margin: auto;
      position: absolute;
      top: 20vh;
      left: 0;
      bottom: 0;
      right: 0;
    }
    .navbar{
      background-color: #213345;
    }
  }
</style>
