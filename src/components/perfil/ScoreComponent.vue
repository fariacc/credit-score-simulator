<template>
  <div class="row mr-0 scores">
    <div v-for="(bar, key) in bars" :class="bar.div">
      <div class="col-md-12 col-lg-12" v-if="key != 1">
        <score-card-component ref="scoreC1" estiloprogress="height: 20vh; width: 20vh;" insidespan="progress-value" outsidespan="progress-value-min"
        :estilo="bar.estilo" :score="bar.valor" :bars="bars" :valuenow="bar.valor" progressdiv="mb-3 mx-auto progress"></score-card-component>
        <p-component classe="text-center texto-idade" :texto="bar.texto"></p-component>
      </div>
      <div class="col-md-12 col-lg-12" v-else>
        <score-card-component @mandaTexto="mandarTexto" ref="scoreC2" estiloprogress="height: 28vh; width: 28vh;" insidespan="progress-value" outsidespan="progress-value-max"
        :estilo="bar.estilo" :score="bar.valor" :bars="bars" :valuenow="bar.valor" rotulo="Seu Score" progressdiv="mb-3 mx-auto progress"></score-card-component>
        <p-component classe="texto-risco" :texto="textoSuperior"></p-component>
        <p-component classe="texto-perfil-inferior" :texto="textoScore"></p-component>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import PComponent from '../shared/PComponent.vue'
  import ScoreCardComponent from '../shared/ScoreCardComponent.vue'
  import ButtonComponent from '../shared/ButtonComponent.vue'
  export default {
    components: {
      PComponent, ScoreCardComponent, ButtonComponent
    },
    name: 'score-component',
    data () {
      return {
        bars: [
          { div: 'col-md-4 col-lg-4 mt-5', valor: 0, estilo: '', texto: 'Score médio das pessoas que vivem na mesma cidade que você' },
          { div: 'col-md-4 col-lg-4', valor: 0, estilo: '' },
          { div: 'col-md-4 col-lg-4 mt-5', valor: 0, estilo: '', texto: 'Score médio das pessoas com a mesma faixa etária que você' }
        ],
        textoScore: null, textoSuperior: null
      }
    },
    methods:{
      mandarTexto(textoScore, textoSuperior){
        this.textoScore = textoScore
        this.textoSuperior = textoSuperior
      }
    },
    created () {
      this.usuario = sessionStorage.getItem('usuario')
      if (this.usuario != null) { // login com sucesso
        this.bars[0].valor = 600
        this.bars[1].valor = 825
        this.bars[2].valor = 220
      }
      else{ // login não existe
        this.bars[0].valor = undefined
        this.bars[1].valor = undefined
        this.bars[2].valor = undefined
      }
    }
  }
</script>

<style lang="scss">
  .scores{
    margin-top: 1vh;
  }
</style>
