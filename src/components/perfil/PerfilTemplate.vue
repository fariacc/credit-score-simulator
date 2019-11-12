<template>
  <div class="perfil">
    <navbar-interna-component></navbar-interna-component>
    <div class="col-md-8">
      <router-link to="/perfil">
        <button-component tipo="button" rotulo="Meu Perfil" classe="btn text-light btn-opcao"></button-component>
      </router-link>
      <router-link to="/como-funciona">
        <button-component tipo="button" rotulo="Como funciona" classe="btn text-light btn-opcao"></button-component>
      </router-link>
    </div>
    <div class="row m-0">
      <div class="col-md-3 cadastro-positivo-link">
        <p-component classe="text-light texto-cadastro" texto="Cadastre-se para melhorar o seu Score"></p-component>
        <router-link to="/cadastro-positivo">
          <button-component tipo="button" rotulo="Cadastro positivo" classe="btn text-light btn-opcao bg-warning mr-auto"></button-component>
        </router-link>
      </div>
    </div>
    <score-component></score-component>
  </div>
</template>

<script>
  import NavbarInternaComponent from '../shared/NavbarInternaComponent.vue'
  import PComponent from '../shared/PComponent.vue'
  import ButtonComponent from '../shared/ButtonComponent.vue'
  import ScoreComponent from './ScoreComponent.vue'
  export default {
    name: 'perfil-template',
    components: {
      NavbarInternaComponent, PComponent, ButtonComponent, ScoreComponent
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
  .perfil{
    background-image: linear-gradient(#213345, #737373);
    max-width: 100%;
    max-width: 100vw;
    min-height: 100vh;
    max-height: 100%;
    .cadastro-positivo-link{
      margin-top: 5vh;
    }
    .bg-warning{
      background-color: #ec9100!important;
      &:hover{
        background-color: #ff9d00!important;
      }
    }
  }
</style>
