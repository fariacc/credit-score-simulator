<template>
  <form class="form-row mb-0" @submit="recuperarSenha">
    <input-component classediv="form-group col-md-12 col-lg-12" labelinput="emailReset" label="E-mail" classeinput="form-control"
    tipoinput="email" v-model="emailReset"></input-component>
    <div class="form-group col-md-12 col-lg-12 text-center">
      <button-component tipo="submit" rotulo="Recuperar senha" classe="btn btn-default"></button-component>
    </div>
    <div class="form-group col-md-12 col-lg-12 text-center mb-0">
      <p>Já possui conta?<router-link to="/login" class="link"><strong> Acesse</strong></router-link></p>
    </div>
    <modal-component v-if="showModal" @close="showModal = false">
      <h3 slot="header">Recuperação de Senha</h3>
      <h6 slot="body" class="text-center"><i :class="icone" aria-hidden="true"></i> {{message}}</h6>
    </modal-component>
  </form>
</template>

<script>
  import axios from 'axios'
  import ModalComponent from '../shared/ModalComponent.vue'
  import InputComponent from '../shared/InputComponent.vue'
  import ButtonComponent from '../shared/ButtonComponent.vue'
  export default {
    name: 'reset-password-form-component',
    components: {
      InputComponent, ButtonComponent, ModalComponent
    },
    data(){
      return{
        resetada: false, emailReset: null, showModal: false, message: null, icone: null,
      }
    },
    methods: {
      recuperarSenha: function (event){
        if (this.validEmail(this.emailReset)) {
          this.showModal = true
          this.message = 'Verifique seu e-mail'
          this.icone = 'text-success far fa-lg fa-check-circle'
        }
        event.preventDefault()
      },
      validEmail: function (emailReset) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(emailReset);
      }
    }
  }
</script>

<style lang="scss">
  .link{
    color: #41698E;
    &:hover{
      color: #213345!important;
      text-decoration: none!important;
    }
  }
</style>
