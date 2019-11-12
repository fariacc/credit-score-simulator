<template>
  <form class="form-row mb-0" @submit="register(usuario.cpf, $event)">
    <div class="form-group col-md-12 col-lg-12">
      <label class="control-label" for="cpf">CPF *</label>
      <the-mask class="form-control" v-model="usuario.cpf" @change.native="validarCPF(usuario.cpf, $event)" name="cpf" :mask="['###.###.###-##']" required/>
      <span class="invalido text-danger">{{ msgValidacao }}</span>
    </div>
    <input-component classediv="form-group col-md-12 col-lg-12" labelinput="nome" label="Nome *" classeinput="form-control"
    tipoinput="text" v-model="usuario.nome"></input-component>
    <div class="form-group col-md-4 col-lg-4">
      <label class="control-label" for="telefone">Telefone *</label>
      <the-mask class="form-control" type="tel" v-model="usuario.telefone" name="telefone" :mask="['(##) #####-####']" required/>
    </div>
    <input-component classediv="form-group col-md-8 col-lg-8" labelinput="email" label="E-mail *" classeinput="form-control"
    tipoinput="email" v-model="usuario.email"></input-component>
    <input-component classediv="form-group col-md-6 col-lg-6" labelinput="senha" label="Senha *" classeinput="form-control"
    tipoinput="password" v-model="usuario.senha"></input-component>
    <input-component classediv="form-group col-md-6 col-lg-6" labelinput="senhaConfirm" label="Confirmar senha *" classeinput="form-control"
    tipoinput="password" v-model="usuario.senhaConfirm"></input-component>
    <div class="form-group col-md-12 col-lg-12 text-center">
      <button-component tipo="submit" rotulo="Salvar" classe="btn btn-default"></button-component>
    </div>
    <modal-component v-if="showModal" @close="showModal = false">
      <h3 slot="header">Crie a sua conta</h3>
      <h5 slot="body" class="text-center"><i :class="icone" aria-hidden="true"></i> {{message}}</h5>
      <h6 slot="footer" v-show="irLogin == 1"><button tipo="button" class="btn btn-default" @click="irParaLogin">Acessar conta</button></h6>
    </modal-component>
  </form>
</template>

<script>
  import axios from 'axios';
  import CPF from 'gerador-validador-cpf'
  import HeaderComponent from '../shared/HeaderComponent.vue'
  import InputComponent from '../shared/InputComponent.vue'
  import ModalComponent from '../shared/ModalComponent.vue'
  import ButtonComponent from '../shared/ButtonComponent.vue'
  export default {
    name: 'register-form-component',
    components: {
      HeaderComponent, InputComponent, ButtonComponent, ModalComponent
    },
    data(){
      return{
        usuario: { cpf: null, nome: null, telefone: null, email: null, senha: null, senhaConfirm: null },
        msgValidacao: '', showModal: false, icone: null, message: null, irLogin: null
      }
    },
    methods: {
      irParaLogin(){
        this.showModal = false
        this.$router.push('/login')
      },
      completeData: function(){
        if (sessionStorage.getItem('RedeSocial')){
          let RedeSocial = sessionStorage.getItem('RedeSocial')
          RedeSocial = JSON.parse(RedeSocial)
          this.usuario.nome = RedeSocial.nome
          this.usuario.email = RedeSocial.email
        }
      },
      validarCPF (cpf, event){
        if (!CPF.validate(cpf)){
          event.preventDefault()
          this.msgValidacao = 'Insira um CPF válido'
        }
        else{
          this.msgValidacao = ''
          return true;
        }
      },
      validEmail: function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      },
      register (cpf, event){
        if ((CPF.validate(this.usuario.cpf) == true) && this.usuario.nome && this.usuario.telefone && this.validEmail(this.usuario.email) && this.usuario.senha && this.usuario.senhaConfirm) {
          let RedeSocial = sessionStorage.getItem('RedeSocial')
          RedeSocial = JSON.parse(RedeSocial)
          this.showModal = true
          this.message = 'Registro feito com sucesso'
          this.icone = 'text-success far fa-lg fa-check-circle'
          this.irLogin = 1
        }
        else{
          this.irLogin = 0
          this.showModal = true
          this.message = 'Preencha todos os campos corretamente'
          this.icone = 'text-danger far fa-lg fa-times-circle'
        }
        event.preventDefault()
      }
    },
    mounted() {
      this.completeData()
    }
  }
</script>

<style lang="scss" scoped>
  .form-row{
    .invalido{
      font-size: 0.9rem;
    }
  }
</style>
