<template>
  <div :class="classeDiv">
    <p :class="classe">{{ texto }}</p>
  </div>
</template>

<script>
  export default {
    name: 'p-component',
    props: {
      classe: String, texto: String, classeDiv: String
    }
  }
</script>

<style lang="scss">
  p{
    &.titulo{
      font-weight: lighter;
      text-align: center;
    }
    &.fs-title{
      font-size: 1rem;
      text-transform: uppercase;
      color: #213345;
      margin-bottom: 0vh;
      font-weight: bold;
      text-align: center;
    }
    &.fs-subtitle {
      font-weight: lighter;
      font-size: 1rem;
      color: #213345;
      margin-bottom: 6vh;
      text-align: center;
    }
    &.fs-subtitle-2 {
      font-weight: lighter;
      font-size: 1rem;
      color: #213345;
      margin-bottom: 2vh;
      text-align: center;
    }
    &.texto-risco{
      font-size: 1.8rem;
      font-weight: lighter;
      text-align: center;
      color: #ec9100;
      margin-bottom: 0px;
    }
    &.texto-perfil{
      font-size: 1.4rem;
      font-weight: lighter;
      text-align: center;
      color: #000000d1;
    }
    &.texto-perfil-inferior{
      font-size: 1.4rem;
      font-weight: lighter;
      text-align: center;
      color: #ffffff;
      margin-bottom: 0;
    }
    &.texto-idade{
      font-size: 1.3rem;
      font-weight: lighter;
      margin-top: 4.5vw;
      color: #f5f5f5;
    }
    &.texto-cadastro{
      font-weight: lighter;
      margin-bottom: 0;
      margin-top: 5vh;
    }
    &.texto-coluna{
      line-height: 1.5rem;
      text-align: justify;
      font-weight: lighter;
    }
  }
</style>
