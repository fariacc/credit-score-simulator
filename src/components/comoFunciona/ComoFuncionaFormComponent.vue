<template>
  <form class="como-funciona-form">
    <div v-for="pergunta in perguntas" v-show="step == pergunta.step">
      <p class="fs-title">{{pergunta.titulo}}</p>
      <p class="fs-subtitle">{{pergunta.subtitulo}}</p>
      <div class="mx-auto">
        <radio-component ref="radio" v-for="(questao, key) in pergunta.questoes" classediv="perguntas mx-auto" type="radio" :key="pergunta.index" :id="questao.nome"
        :labelradio="questao.nome" :name="pergunta.name" :checked="questao.checked" :label="questao.label" :valor="questao.nome" :peso="questao.peso" v-model="questao.nome" @finished="clicked">
        </radio-component>
      </div>
      <div class="col-md-12">
        <button-component @click.native.prevent="prev('')" v-if="pergunta.step != 0" tipo="button" classe="btn btn-default-2" rotulo="Anterior"></button-component>
        <button-component @click.native.prevent="next('active')" v-if="pergunta.step != 8" tipo="button" classe="btn btn-outline" rotulo="Próximo"></button-component>
        <button-component @click.native="$emit('show', true)" v-if="pergunta.step == 8" tipo="button" classe="btn btn-outline" rotulo="Finalizar"></button-component>
      </div>
    </div>
  </form>
</template>

<script>
  import ButtonComponent from '../shared/ButtonComponent.vue'
  import InputComponent from '../shared/InputComponent.vue'
  import RadioComponent from '../shared/RadioComponent.vue'
  import SelectComponent from '../shared/SelectComponent.vue'
  export default {
    name: 'como-funciona-form-component',
    components: {
      SelectComponent, ButtonComponent, InputComponent, RadioComponent
    },
    props: { peso: Number },
    data() {
      return {
        step: 0, labelAtual: null, final: 0,
        perguntas: [
          {
            step: 0, titulo: "Faixa etária", subtitulo: "Qual é a sua faixa etária?", name: "idade", vmodel: null,
            questoes: [
              { nome: "jovem", label: "18 a 25 anos (Jovem)", peso: 250, checked: false}, { nome: "meiaidade", label: "26 a 34 anos (Meia idade)", peso: 100, checked: false},
              { nome: "adulto", label: "35 a 60 anos (Adulto)", peso: 200, checked: false}, { nome: "terceiraidade", label: "Acima de 60 anos (Idoso)", peso: 250, checked: false}
            ]
          },
          {
            step: 1, checked: null, titulo: "Renda familiar", subtitulo: "Qual é a sua renda familiar?", name: "renda", vmodel: null,
            questoes: [
              { nome: "classeE", label: "Até 1 salários mínimos", peso: 50}, { nome: "classeD", label: "De 1 a 3 salários mínimos", peso: 100},
              { nome: "classeC", label: "De 3 a 10 salários mínimos", peso: 175}, { nome: "classeB", label: "De 10 a 20 salários mínimos", peso: 300},
              { nome: "classeA", label: "Acima de 20 salários mínimos", peso: 350}
            ]
          },
          {
            step: 2, checked: null, titulo: "Estado civil", subtitulo: "Qual é o seu estado civil?", name: "estadocivil", vmodel: null,
            questoes: [
              { nome: "solteiro", label: "Solteiro(a)", peso: 100}, { nome: "casado", label: "Casado(a)", peso: 150},
              { nome: "divorciado", label: "Divorciado(a)", peso: 50},{ nome: "viuvo", label: "Viúvo(a)", peso: 200}
            ]
          },
          {
            step: 3, checked: null, titulo: "Escolaridade", subtitulo: "Qual é a sua escolaridade?", name: "escolaridade", vmodel: null,
            questoes: [
              { nome: "fundamental", label: "Ensino fundamental", peso: 200}, { nome: "medio", label: "Ensino médio", peso: 190},
              { nome: "superior", label: "Ensino superior", peso: 100}, { nome: "posgraduacao", label: "Pós graduação", peso: 150}
            ]
          },
          {
            step: 4, checked: null, titulo: "Cartão de crédito", subtitulo: "Você possui cartão de crédito?", name: "cartaocredito", vmodel: null,
            questoes: [
              { nome: "sim", label: "Sim", peso: 150}, { nome: "nao", label: "Não", peso: 50}
            ]
          },
          {
            step: 5, checked: null, titulo: "Financiamento", subtitulo: "Você possui algum financiamento em seu nome?", name: "financiamento", vmodel: null,
            questoes: [
              { nome: "financiado", label: "Sim", peso: -50}, { nome: "naofinanciado", label: "Não", peso: 50}
            ]
          },
          {
            step: 6, checked: null, titulo: "Negativação", subtitulo: "Você já foi negativado?", name: "negativacao", vmodel: null,
            questoes: [
              { nome: "janegativado", label: "Sim", peso: -150}, { nome: "nuncanegativado", label: "Não", peso: 0}
            ]
          },
          {
            step: 7, checked: null, titulo: "Negativado", subtitulo: "Você está negativado atualmente?", name: "negativado", vmodel: null,
            questoes: [
              { nome: "estanegativado", label: "Sim", peso: -150}, { nome: "naonegativado", label: "Não", peso: 0}
            ]
          },
          {
            step: 8, checked: null, titulo: "Tempo negativado", subtitulo: "Há quanto tempo está ou já esteve negativado?", name: "temponegativado", vmodel: null,
            questoes: [
              { nome: "30dias", label: "Menos de 30 dias", peso: -10 }, { nome: "60dias", label: "Menos de 60 dias", peso: -50},
              { nome: "90dias", label: "Menos de 90 dias", peso: -100}, { nome: "180dias", label: "Menos de 180 dias", peso: -200},
              { nome: "acima180dias", label: "Mais de 180 dias", peso: -300}
            ]
          }
        ]
      }
    },
    methods: {
      prev(classe) {
        this.labelAtual = null
        this.$emit('clickPrev', classe, this.step)
        this.step--
        this.$refs.radio.forEach(function(value,key){
          value.clearRadio()
        })
      },
      next(classe) {
        if(this.final == 0){
          if(this.labelAtual != null){
            this.step++
            this.labelAtual = null
            this.$emit('clickNext', classe, this.step)
          }
        }
        else{
          this.$emit('salvaScore')
        }
      },
      clicked(peso, valor, nome){
        this.$emit('setPeso', peso)
        this.labelAtual = valor
        if(nome == 'nuncanegativado' || nome == 'naonegativado'){
          this.final = 1
          this.$emit('show', true)
        }
        else if(this.step == 8){
          this.final = 1
        }
        else{
          this.final = 0
        }
      },
      refazerSimulacao(){
        this.step = 0
        this.$refs.radio.forEach(function(value,key){
          value.clearRadio()
        })
      }
    }
  }
</script>

<style lang="scss">
  .como-funciona-form{
    text-align: center;
    border-radius: 5px;
    background-color: #ffffff;
    min-height: 100%;
  }
</style>
