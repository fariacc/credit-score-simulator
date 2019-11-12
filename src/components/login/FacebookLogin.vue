<template lang="html">
  <fb-signin-button class="facebookBtn"
    :params="fbSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError">
    <i class="fab fa-facebook-f"></i>
  </fb-signin-button>
</template>

<script>
import axios from 'axios'
export default {
  name: 'facebook-login',
  data () {
    return {
      logado: false,
      fbSignInParams: {
        scope: 'email', return_scopes: true
      }
    }
  },
  methods: {
    onSignInSuccess (response) {
      if (response.status === "connected") {
        FB.api('/me?fields=email,name,id', function(usuario) {
          let profile = {
            "tipoRedeSocial":"2",
            "imagemUrl":"https://graph.facebook.com/"+usuario.id+"/picture?type=large",
            "facebookId":usuario.id,
            "email":usuario.email,
            "nome":usuario.name
          }
          sessionStorage.setItem('RedeSocial', JSON.stringify(profile))
          sessionStorage.setItem('email', usuario.email)
        })
        var email = sessionStorage.getItem('email')
        var dataRequest = {
          email: email
        }
        this.logado = true
        if (this.logado) { // login com sucesso
          this.$router.push('/register') // redireciona o usuário pra página o cadastro
        }
        else{ // login não existe
          // sessionStorage.setItem('usuario', JSON.stringify(response.data.user))
          sessionStorage.setItem('token', '12345')
          this.$router.push('/perfil') // redireciona o usuário pra página principal
        }
      }
    },
    onSignInError (error) {
      alert('O login falhou')
    }
  }
}
</script>

<style lang="scss">
.facebookBtn{
  background: #4060A5;
  display: inline-block;
  padding: 4px 8px;
  border-radius: 20px;
  &:hover{
    color: #4060A5!important;
    background: #fff;
    border: 1.5px solid #4060A5;
  }
}
</style>
