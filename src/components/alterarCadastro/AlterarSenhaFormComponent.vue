<template>
  <div class="col-md-6 col-lg-6">
    <header-component header="Alterar senha" titulo="Troque a sua senha quando desejar"></header-component>
    <form class="form-row mb-0" @submit="alterarSenha($event)">
      <div class="col-md-12 col-lg-12">
        <input-component classediv="form-group col-md-12 col-lg-12" labelinput="senha" label="Senha atual *" classeinput="form-control"
        tipoinput="password" v-model="form.senha"></input-component>
        <input-component classediv="form-group col-md-12 col-lg-12" labelinput="novaSenha" label="Nova senha *" classeinput="form-control"
        tipoinput="password" v-model="form.novaSenha"></input-component>
        <input-component classediv="form-group col-md-12 col-lg-12" labelinput="novaSenhaConfirm" label="Confirmar nova senha *" classeinput="form-control"
        tipoinput="password" v-model="form.novaSenhaConfirm"></input-component>
        <div class="form-group col-md-12 col-lg-12 text-center">
          <button-component tipo="submit" classe="btn btn-default" rotulo="Alterar senha"></button-component>
        </div>
      </div>
      <modal-component v-if="showModal" @close="showModal = false">
        <h3 slot="header" class="mx-auto">Alterar Senha</h3>
        <h6 slot="body" class="text-center"><i :class="icone" aria-hidden="true"></i> {{message}}</h6>
        <h5 slot="footer" v-show="irPerfil == 1"><button tipo="button" class="btn btn-default" @click="irParaPerfil">Ir para Perfil</button></h5>
      </modal-component>
    </form>
  </div>
</template>

<script>
  import axios from 'axios'
  import CPF from 'gerador-validador-cpf'
  import HeaderComponent from '../shared/HeaderComponent.vue'
  import InputComponent from '../shared/InputComponent.vue'
  import ButtonComponent from '../shared/ButtonComponent.vue'
  import ModalComponent from '../shared/ModalComponent.vue'
  export default {
    name: 'alterar-cadastro-form-component',
    components: {
      HeaderComponent, InputComponent, ButtonComponent, ModalComponent
    },
    data(){
      return{
        icone: null, message: null, showModal: false, usuario: false, irPerfil: null,
        form: { senha: null, token: null, novaSenha: null, novaSenhaConfirm: null }
      }
    },
    methods: {
      irParaPerfil(){
        this.showModal = false
        this.$router.push('/perfil')
      },
      alterarSenha (event){
        if ((this.form.novaSenha == this.form.novaSenhaConfirm) && (this.form.novaSenha != null) && (this.form.novaSenhaConfirm != null) && (this.form.senhaAtual != null)){
          this.showModal = true
          this.message = 'Senha alterada com sucesso'
          this.icone = 'text-success far fa-lg fa-check-circle'
          this.irPerfil = 1
        }
        else{
          this.showModal = true
          this.message = 'Preencha os campos de senha corretamente'
          this.icone = 'text-danger far fa-lg fa-times-circle'
          this.irPerfil = 0
        }
        event.preventDefault()
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
