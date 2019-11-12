<template>
  <div class="card px-2 py-3">
    <p-component classe="fs-title" texto="Resultados"></p-component>
    <p-component classe="fs-subtitle-2" texto="Essa é a simulação do seu Score"></p-component>
    <score-card-component @mandaTexto="mandarTexto" ref="scoreCard" v-for="(bar, key) in bars" :key="bar.index" estiloprogress="height: 25vh; width: 12vw;" progressdiv="progress mx-auto"
    outsidespan="progress-value-md" :estilo="bar.estilo" :bars="bars" :valuenow="bar.valor" insidespan="progress-value" :score="bar.valor">
    </score-card-component>
    <p-component classe="small mb-0" texto="Atenção: o cálculo do Score é apenas um exemplo para que você conheça,
    de forma mais simples e resumida, como cada informação sua influencia o cálculo do seu Score."></p-component>
  </div>
</template>

<script>
  import ScoreCardComponent from '../shared/ScoreCardComponent.vue'
  import PComponent from '../shared/PComponent.vue'
  export default {
    name: 'simulacao-component',
    props: { value: { type: Number, default: 30 } },
    components: {
      ScoreCardComponent, PComponent
    },
    data(){
      return{
        bars: [
          { valor: this.value, estilo: null, textoScore: null },
        ]
      }
    },
    methods: {
      mandarTexto(texto){
        this.textoScore = texto
      },
      changeValue: function(value, event){
        this.$refs.scoreCard[0].bars[0].valor = value
        this.$refs.scoreCard[0].changeStyle()
        this.$emit('recebeTextoScore', this.textoScore)
      }
    }
  }
</script>

<style lang="scss">
</style>
