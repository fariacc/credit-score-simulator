<template>
  <div class="cadastro-positivo">
    <navbar-interna-component></navbar-interna-component>
    <div class="col-md-8">
      <router-link to="/perfil">
        <button-component tipo="button" rotulo="Meu Perfil" classe="btn text-light btn-opcao"></button-component>
      </router-link>
      <router-link to="/como-funciona">
        <button-component tipo="button" rotulo="Como funciona" classe="btn text-light btn-opcao"></button-component>
      </router-link>
    </div>
    <h2 class="text-light text-center">Cadastro Positivo</h2>
    <hr>
    <ul-component classeul="col-md-12 progressbar" :item="li" :items="li"></ul-component>
    <div class="col-md-12">
      <div class="row mx-auto">
        <cadastro-positivo-form-component @clickNext="next" @clickPrev="prev"></cadastro-positivo-form-component>
      </div>
    </div>
  </div>
</template>

<script>
  import NavbarInternaComponent from '../shared/NavbarInternaComponent.vue'
  import ButtonComponent from '../shared/ButtonComponent.vue'
  import UlComponent from '../shared/UlComponent.vue'
  import CadastroPositivoFormComponent from './CadastroPositivoFormComponent.vue'
  export default {
    name: 'cadastro-positivo-template',
    components: {
      NavbarInternaComponent, ButtonComponent, UlComponent, CadastroPositivoFormComponent
    },
    data(){
      return{
        li: [
          { classe: "active", nome: "Informações de endereço"}, { classe: "", nome: "Informações complementares"},
        ]
      }
    },
    methods: {
      prev(classe, step) {
        this.li[step].classe = classe
      },
      next(classe, step) {
        this.li[step].classe = classe
      }
    },
    created(){
      let usuarioAux = sessionStorage.getItem('usuario') //pega a info de "usuario"
      if (!usuarioAux){
        this.$router.push('/login')//se o usuario não está logado e tenta acessar a pagina principal, força a ir pra página de login
      }
    }
  }
</script>

<style lang="scss">
  .cadastro-positivo{
    max-width: 100%;
    max-width: 100vw;
    min-height: 100vh;
    max-height: 100%;
    background-image: linear-gradient(#213345, #737373);
    h2{
      font-weight: lighter;
    }
    hr{
      margin-bottom: 6vh;
      border: 0;
      border-top: 1px solid #ffffff;
      width: 50%;
    }
    .progressbar{
      li{
        width: 50%;
        &:after{
          left: -50%;
        }
      }
    }
  }
</style>
