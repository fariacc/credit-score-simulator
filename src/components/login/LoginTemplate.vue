<template>
  <div class="row mr-0">
    <banner-component></banner-component>
    <div class="col-md-8 col-lg-8">
      <div class="conta">
        <header-component header="Entre na sua conta" titulo="Use alguma das suas redes sociais"></header-component>
        <icons-component subtitulo="Ou preencha os campos abaixo"></icons-component>
        <login-form-component></login-form-component>
      </div>
    </div>
  </div>
</template>

<script>
  import BannerComponent from '../shared/BannerComponent.vue'
  import HeaderComponent from '../shared/HeaderComponent.vue'
  import IconsComponent from '../shared/IconsComponent.vue'
  import LoginFormComponent from './LoginFormComponent.vue'
  export default {
    name: 'login-template',
    components: {
      BannerComponent, HeaderComponent, IconsComponent, LoginFormComponent
    },
    created(){
      let usuarioAux = sessionStorage.getItem('usuario') //pega a info de "usuario"
      if (usuarioAux){
        this.$router.push('/perfil')//se o usuario está logado e tenta acessar a pagina de login, força a ir pra página principal
      }
    }
  }
</script>

<style lang="scss" scoped>
  .conta{
    width: 45%;
    height: 80%;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
</style>
