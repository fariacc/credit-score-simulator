<template>
  <div :class="progressdiv" :style="estiloprogress">
    <div role="progressbar" aria-valuemax="1000" :aria-valuenow="valuenow" class="progress-bar" :style="estilo">
      <span :class="outsidespan">
        <p class="texto-perfil mb-0">{{ rotulo }}</p>
        {{ score }}
        <span :class="insidespan">/1000</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'score-card-component',
    props: {
      progressdiv: String, valuenow: Number, estilo: String, score: Number, rotulo: String, bars: Array,
      estiloprogress: String, insidep: String, insidespan: String, outsidespan: String
    },
    data(){
      return{
        background: {
          medio_amarelo: "background-color: #f8ce11c2;", medio_laranja: "background-color: #ec9100c2;",
          baixo_vermelho: "background-color: #ec0000c2;", verde: "background-color: #2db90ac2;"
        },
        textoScore: null
      }
    },
    methods: {
      changeStyle () {
        var i
        for (i = 0; i < this.bars.length; i++) {
          this.bars[i].estilo = 'width: '+this.bars[i].valor/10+'%;'
          if (this.bars[i].valor <= 300){
            this.textoSuperior = 'O risco de pessoas com esse Score não pagarem suas contas é altíssimo.'
            this.textoScore = 'De cada 100 pessoas classificadas com este score, é provável que 75% (75 pessoas) tornem-se inadimplentes nos próximos 06 meses.'
            this.bars[i].estilo += this.background.baixo_vermelho
          }
          if (this.bars[i].valor > 300 && this.bars[i].valor <= 600){
            this.textoSuperior = 'O risco de pessoas com esse Score não pagarem suas contas é alto.'
            this.textoScore = 'De cada 100 pessoas classificadas com este score, é provável que 50% (50 pessoas) tornem-se inadimplentes nos próximos 06 meses.'
            this.bars[i].estilo += this.background.medio_laranja
          }
          if (this.bars[i].valor > 600 && this.bars[i].valor <= 800){
            this.textoSuperior = 'O risco de pessoas com esse Score não pagarem suas contas é médio.'
            this.textoScore = 'De cada 100 pessoas classificadas com este score, é provável que 25% (25 pessoas) tornem-se inadimplentes nos próximos 06 meses.'
            this.bars[i].estilo += this.background.medio_amarelo
          }
          else if (this.bars[i].valor > 800){
            this.textoSuperior = 'O risco de pessoas com esse Score não pagarem suas contas é baixo.'
            this.textoScore = 'De cada 100 pessoas classificadas com este score, é provável que 10% (10 pessoas) tornem-se inadimplentes nos próximos 06 meses.'
            this.bars[i].estilo += this.background.verde
          }
        }
        this.$emit('mandaTexto', this.textoScore, this.textoSuperior)
      }
    },
    created() {
      this.changeStyle()
    }
  }
</script>

<style lang="scss">
  .progress{
    margin: 1.5vh 1vw;
    border-radius: 20rem!important;
    position: relative;
    background-color: rgba(200, 200, 200, .8)!important;
    -webkit-print-color-adjust: exact;
    .progress-bar{
      background-color: #2db90ac2;
      .progress-value-max {
        position: absolute;
        right: 0;
        left: 0;
        font-size: 2.9rem;
        font-weight: lighter;
        color: #000000d7;
        height: 22vh;
        .progress-value{
          font-size: 1.8rem;
          font-weight: lighter;
          color: #000000d7;
        }
      }
      .progress-value-md {
        position: absolute;
        right: 0;
        left: 0;
        font-size: 2.6rem;
        font-weight: lighter;
        color: #000000d7;
        .progress-value{
          font-size: 1.3rem;
          font-weight: lighter;
          color: #000000d7;
        }
      }
      .progress-value-min {
        position: absolute;
        right: 0;
        left: 0;
        font-size: 2rem;
        font-weight: lighter;
        color: #000000d7;
        .progress-value{
          font-size: 1rem;
          font-weight: lighter;
          color: #000000d7;
        }
      }
    }
  }
</style>
