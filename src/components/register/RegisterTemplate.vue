<template>
  <div class="row mr-0">
    <banner-component></banner-component>
    <div class="col-md-8 col-lg-8">
      <div class="conta">
        <header-component header="Crie a sua conta" titulo="Use alguma das suas redes sociais"></header-component>
        <icons-component subtitulo="Ou preencha os campos abaixo marcados com *"></icons-component>
        <register-form-component></register-form-component>
        <div class="form-group col-md-12 col-lg-12 text-center mb-0">
          <p>Já possui conta?<router-link to="/login" class="link"><strong> Acesse</strong></router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BannerComponent from '../shared/BannerComponent.vue'
  import IconsComponent from '../shared/IconsComponent.vue'
  import HeaderComponent from '../shared/HeaderComponent.vue'
  import RegisterFormComponent from './RegisterFormComponent.vue'
  export default {
    name: 'register-template',
    components: {
      BannerComponent, IconsComponent, HeaderComponent, RegisterFormComponent
    },
    created(){
      let usuarioAux = sessionStorage.getItem('usuario') //pega a info de "usuario"
      if (usuarioAux){
        this.$router.push('/perfil')//se o usuario está logado e tenta acessar a pagina de registro, força a ir pra página principal
      }
    }
  }
</script>

<style lang="scss" scoped>
  .conta{
    width: 45%;
    height: 95%;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  .link{
    color: #41698E;
    &:hover{
      color: #213345!important;
      text-decoration: none!important;
    }
  }
</style>
