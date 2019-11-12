<template>
  <g-signin-button class="googleBtn"
    :params="googleSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError">
    <i class="fab fa-google"></i>
  </g-signin-button>
</template>
<script>
export default {
  name:'google-login',
  created(){
    let ckeditor = document.createElement('script');
    ckeditor.setAttribute('src',"https://apis.google.com/js/api:client.js");
    document.head.appendChild(ckeditor);
  },
  data () {
    return {
      logado: false,
      /**
       * The Auth2 parameters, as seen on
       * https://developers.google.com/identity/sign-in/web/reference#gapiauth2initparams.
       * As the very least, a valid client_id must present.
       * @type {Object}
       */
      googleSignInParams: {
        client_id: '7205'
      }
    }
  },
  methods: {
    onSignInSuccess (googleUser) {
      // `googleUser` is the GoogleUser object that represents the just-signed-in user.
      // See https://developers.google.com/identity/sign-in/web/reference#users
      var google = googleUser.getBasicProfile() // etc etc
      var data = {
        email: google.U3, // para testar 10845393901 senha
      }
      this.logado = true
      if (this.logado) { // login com sucesso
        let profile = {
          "tipoRedeSocial":"1",
          "imagemUrl":google.Paa,
          "googleId":google.Eea,
          "email":google.U3,
          "nome":google.ig
        }
        sessionStorage.setItem('RedeSocial', JSON.stringify(profile))
        this.$router.push('/register') // redireciona o usuário pra página o cadastro
      }
      else{ // login não existe
        // sessionStorage.setItem('usuario', JSON.stringify(response.data.user))
        sessionStorage.setItem('token', '12345')
        this.$router.push('/perfil') // redireciona o usuário pra página principal
      }
    },
    onSignInError (error) {
      alert('O login falhou')
    }
  }
}
</script>

<style lang="scss">
.googleBtn{
  background-color: #e64522;
  display: inline-block;
  padding: 4px 8px;
  border-radius: 20px;
  color: #e64522;
  &:hover{
    color: #e64522!important;
    background: #fff;
    border: 1.5px solid #e64522;
  }
}
</style>
