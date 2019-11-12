<template>
  <div class="text-center">
    <!-- <button-component v-for="icone in icones" :classe="icone.classe" :key="icone.id"></button-component> -->
    <google-login class="social-net"/>
    <facebook-login class="social-net"/>
    <p-component classe="titulo" :texto="subtitulo"></p-component>
  </div>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue'
import PComponent from './PComponent.vue'
import GoogleLogin from '../login/GoogleLogin.vue'
import FacebookLogin from '../login/FacebookLogin.vue'
export default {
  name: 'icons-component',
  components: {
    ButtonComponent, PComponent, FacebookLogin, GoogleLogin
  },
  props: {
    subtitulo: String
  }
}
</script>

<style lang="scss">
.social-net{ /* global button class */
  position: relative;
  cursor: pointer;
  width: 3.25vw;
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
</style>
