<template>
  <div class="como-funciona">
    <navbar-interna-component></navbar-interna-component>
    <div class="col-md-8 col-lg-8">
      <router-link to="/perfil">
        <button-component tipo="button" rotulo="Meu Perfil" classe="btn text-light btn-opcao"></button-component>
      </router-link>
      <router-link to="/como-funciona">
        <button-component tipo="button" rotulo="Como funciona" classe="btn text-light btn-opcao"></button-component>
      </router-link>
    </div>
    <h2 class="text-light text-center">Como funciona o cálculo de um Score?</h2>
    <hr>
    <ul-component classeul="col-md-12 progressbar" :item="li" :items="li"></ul-component>
    <div class="col-12">
      <div class="row mx-0">
        <div class="col-md-8 col-lg-8 mb-2">
          <como-funciona-form-component ref="form" @show="showModal = true" @salvaScore="salvarScore" @clickNext="next" @clickPrev="prev" @setPeso="setarPeso"></como-funciona-form-component>
        </div>
        <div class="col-md-4 col-lg-4 mb-2">
          <simulacao-component ref="simulacao" :value="this.value" @recebeTextoScore="receberTextoScore"></simulacao-component>
        </div>
      </div>
    </div>
    <form @submit="enviarEmail($event)">
      <modal-component v-if="showModal" @close="fecharModal">
        <h3 slot="header" class="d-print-none">Simulação do Score</h3>
        <h5 slot="body">
          <simulacao-component :value="this.value" v-show="stepModal == 0"></simulacao-component>
          <p-component v-show="stepModal == 1" classe="fs-title mb-2" texto="Em qual e-mail gostaria de receber os resultados?"></p-component>
          <input-component v-show="stepModal == 1" classediv="form-group col-md-8 col-lg-8 my-0 mx-auto" labelinput="emailResultado" label="E-mail"
          classeinput="form-control" tipoinput="email" v-model="emailResultado"></input-component>
          <h6 class="text-center" v-show="stepModal == 2"><i :class="icone" aria-hidden="true"></i> {{message}}</h6>
        </h5>
        <h5 slot="footer" class="d-print-none" v-if="stepModal != 2">
          <button type="button" class="btn btn-default-2" v-show="stepModal == 0" @click="reiniciarSteps">Refazer simulação de Score</button>
          <button type="button" class="btn btn-outline" v-show="stepModal == 0" @click="stepModal = 1">Receber resultados via e-mail</button>
          <button @click="stepModal = 0" v-show="stepModal == 1" type="button" class="btn btn-default-2">Voltar</button>
          <button v-show="stepModal == 1" type="submit" class="btn btn-outline">Enviar e-mail</button>
        </h5>
      </modal-component>
    </form>
  </div>
</template>

<script>
  import axios from 'axios'
  import NavbarInternaComponent from '../shared/NavbarInternaComponent.vue'
  import ButtonComponent from '../shared/ButtonComponent.vue'
  import UlComponent from '../shared/UlComponent.vue'
  import PComponent from '../shared/PComponent.vue'
  import ComoFuncionaFormComponent from './ComoFuncionaFormComponent.vue'
  import SimulacaoComponent from './SimulacaoComponent.vue'
  import ModalComponent from '../shared/ModalComponent.vue'
  import InputComponent from '../shared/InputComponent.vue'
  export default {
    name: 'como-funciona-template',
    components: {
      NavbarInternaComponent, ButtonComponent, UlComponent, ComoFuncionaFormComponent, SimulacaoComponent, ModalComponent, InputComponent, PComponent
    },
    data(){
      return{
        showModal: false, value: 30, emailResultado: null, stepModal: 0, message: '', icone: null, textoScore: null,
        li: [
          { classe: "active", nome: "Faixa etária"}, { classe: "", nome: "Renda familiar"}, { classe: "", nome: "Estado civil"},
          { classe: "", nome: "Escolaridade"}, { classe: "", nome: "Cartão de crédito"}, { classe: "", nome: "Financiamento"},
          { classe: "", nome: "Negativação"}, { classe: "", nome: "Negativado"}, { classe: "", nome: "Tempo negativado"}
        ],
      }
    },
    props: {
      valores: { type: Array, default: function() { return [] } }
    },
    methods: {
      receberTextoScore(texto){
        this.textoScore = texto + ' O Score de Crédito é um sistema de avaliação que mede a probabilidade de uma pessoa se tornar inadimplente. Trata-se de um cálculo matemático baseado em um modelo de análise de cobertura nacional onde 0 – DEMONSTRA MAIOR RISCO e 100 – DEMONSTRA MENOR RISCO.'
      },
      fecharModal(){
        this.showModal = false
        this.stepModal = 0
        this.emailResultado = ''
      },
      prev(classe, step) {
        this.value = this.valores[step-1]
        this.valores.splice(step-1, 1)
        this.peso = undefined
        this.$refs.simulacao.changeValue(this.value)
        this.li[step].classe = classe
      },
      next(classe, step) {
        this.valores.push(this.value - this.peso)
        this.peso = undefined
        this.li[step].classe = classe
      },
      setarPeso(peso){
        if(this.value <= 1000 || this.value >= 30)
        {
          if(this.peso != undefined)
          {
            this.value -= this.peso
          }
          this.teste = this.value + peso
          if(this.teste >= 1000 )
          {
            this.value = 1000
          }else if(this.teste <= 30 )
          {
            this.value = 30
          }else{
            this.value = this.teste
          }
          this.peso = peso
          this.$refs.simulacao.changeValue(this.value)
        }
      },
      salvarScore(){
        alert('Score salvo')
      },
      reiniciarSteps(){
        this.value = 30
        var i
        for (i = 1; i < this.li.length ; i++) {
          this.li[i].classe = ''
          this.valores = new Array()
        }
        this.$refs.simulacao.changeValue(this.value)
        this.$refs.form.refazerSimulacao()
        this.showModal = false
      },
      enviarEmail(event){
        if (this.emailResultado){
          this.stepModal = 2
          this.message = 'Simulação enviada para ' + this.emailResultado
          this.icone = 'text-success far fa-lg fa-check-circle'
        }
        event.preventDefault()
      }
    },
    created(){
      let usuarioAux = sessionStorage.getItem('usuario') //pega a info de "usuario"
      if (!usuarioAux){
        this.$router.push('/login')//se o usuario não está logado e tenta acessar a pagina principal, força a ir pra página de login
      }
    }
  }
</script>

<style lang="scss">
  .como-funciona{
    background-image: linear-gradient(#213345, #737373);
    max-width: 100%;
    max-width: 100vw;
    min-height: 100vh;
    max-height: 100%;
    h2{
      font-weight: lighter;
    }
    hr{
      margin-bottom: 6vh;
      border: 0;
      border-top: 1px solid #ffffff;
      width: 50%;
    }
  }
</style>
