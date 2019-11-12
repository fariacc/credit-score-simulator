<template>
  <form class="form-row mb-0" @submit="salvarNovaSenha">
    <input-component classediv="form-group col-md-12 col-lg-12" labelinput="novaSenha" label="Nova senha" classeinput="form-control"
    tipoinput="password" v-model="novaSenha"></input-component>
    <input-component classediv="form-group col-md-12 col-lg-12" labelinput="novaSenhaConfirm" label="Confirmar nova senha" classeinput="form-control"
    tipoinput="password" v-model="novaSenhaConfirm"></input-component>
    <div class="form-group col-md-12 col-lg-12 text-center">
      <button-component tipo="submit" rotulo="Concluir" classe="btn btn-default"></button-component>
    </div>
    <div class="form-group col-md-12 col-lg-12 text-center mb-0">
      <p>Já possui conta?<router-link to="/login" class="link"><strong> Acesse</strong></router-link></p>
    </div>
    <modal-component v-if="showModal" @close="showModal = false">
      <h3 slot="header">Redefinição de senha</h3>
      <h6 slot="body" class="text-center"><i :class="icone" aria-hidden="true"></i> {{message}}</h6>
    </modal-component>
  </form>
</template>

<script>
  import ModalComponent from '../shared/ModalComponent.vue'
  import InputComponent from '../shared/InputComponent.vue'
  import ButtonComponent from '../shared/ButtonComponent.vue'
  export default {
    name: 'resetar-senha-form-component',
    components: {
      InputComponent, ButtonComponent, ModalComponent
    },
    data(){
      return{
        senhaSalva: false, novaSenha: null, novaSenhaConfirm: null, showModal: false, message: null, icone: null,
      }
    },
    methods:{
      salvarNovaSenha (event){
        this.showModal = true
        this.message = 'Nova senha salva com sucesso'
        if (this.senhaSalva){
          this.icone = 'text-success far fa-lg fa-check-circle'
        }
        else{
          this.icone = 'text-danger far fa-lg fa-times-circle'
        }
        event.preventDefault()
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
