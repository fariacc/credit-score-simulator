<template>
  <div class="col-md-6">
    <header-component header="Alterar cadastro" titulo="Mantenha seu cadastro sempre atualizado"></header-component>
    <form class="form-row mb-0" @submit="alterarCadastro($event)">
      <div class="col-md-12 col-lg-12">
        <div class="form-group col-md-12 col-lg-12">
          <label class="control-label" for="cpf">CPF</label>
          <the-mask class="form-control" v-model="form.cpf" :mask="['###.###.###-##']" disabled/>
        </div>
        <input-component classediv="form-group col-md-12 col-lg-12" labelinput="nome" label="Nome *" classeinput="form-control"
        tipoinput="text" v-model="form.nome"></input-component>
        <input-component classediv="form-group col-md-12 col-lg-12" labelinput="email" label="E-mail *" classeinput="form-control"
        tipoinput="email" v-model="form.email"></input-component>
        <div class="form-group col-md-12 col-lg-12">
          <label class="control-label" for="telefone">Telefone *</label>
          <the-mask class="form-control" type="tel" v-model="form.telefone" :mask="['(##) #####-####']" required/>
        </div>
        <div class="form-group col-md-12 col-lg-12 text-center">
          <button-component tipo="submit" classe="btn btn-default" rotulo="Salvar"></button-component>
        </div>
      </div>
    </form>
    <modal-component v-if="showModal" @close="showModal = false">
      <h3 slot="header">Alterar Cadastro</h3>
      <h6 slot="body" class="text-center"><i :class="icone" aria-hidden="true"></i> {{message}}</h6>
      <h5 slot="footer" v-show="irPerfil == 1"><button tipo="button" class="btn btn-default" @click="irParaPerfil">Ir para Perfil</button></h5>
    </modal-component>
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
        form: { cpf: null, nome: null, telefone: null, email: null, token: null }
      }
    },
    methods: {
      irParaPerfil(){
        this.showModal = false
        this.$router.push('/perfil')
      },
      alterarCadastro (event){
        if (this.form.nome && this.form.telefone && this.form.email) {
          this.showModal = true
          sessionStorage.setItem('usuario', JSON.stringify(this.form))
          this.message = 'Cadastro alterado com sucesso'
          this.icone = 'text-success far fa-lg fa-check-circle'
          this.irPerfil = 1
        }
        else {
          this.showModal = true
          this.message = 'Preencha todos os campos obrigatórios'
          this.icone = 'text-danger far fa-lg fa-times-circle'
          this.irPerfil = 0
        }
        event.preventDefault()
      }
    },
    created(){
      let usuarioAux = sessionStorage.getItem('usuario') //pega a info de "usuario"
      if (usuarioAux){
        this.usuario = JSON.parse(usuarioAux) //this.usuario recebendo as infos de usuario em forma de objeto
        this.form.cpf = this.usuario.cpf
        this.form.nome = this.usuario.name
        this.form.telefone = this.usuario.phone
        this.form.email = this.usuario.email
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
