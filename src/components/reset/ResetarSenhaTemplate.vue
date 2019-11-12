<template>
  <div class="row mr-0">
    <banner-component></banner-component>
    <div class="col-md-8 col-lg-8">
      <div class="conta">
        <header-component header="Recuperação de senha" titulo="Insira a nova senha abaixo"></header-component>
        <resetar-senha-form-component></resetar-senha-form-component>
      </div>
    </div>
  </div>
</template>

<script>
  import BannerComponent from '../shared/BannerComponent.vue'
  import HeaderComponent from '../shared/HeaderComponent.vue'
  import IconsComponent from '../shared/IconsComponent.vue'
  import ResetarSenhaFormComponent from './ResetarSenhaFormComponent.vue'
  export default {
    name: 'resetar-senha-template',
    components: {
      BannerComponent, HeaderComponent, IconsComponent, ResetarSenhaFormComponent
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
    height: 60%;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
</style>
