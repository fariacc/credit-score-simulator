<template>
  <div class="col-md-4 col-lg-4 banner">
    <div class="row align-items-center justify-content-center">
      <div class="filter"></div>
      <div class="col-md-10 col-sm-10 col-xs-12">
        <div class="content-banner">
          <router-link to="/">
            <img class="mx-auto d-block" src="../../../src/assets/credit-score-logo.png" alt="Company logo">
          </router-link>
          <h1 class="text-center text-light mt-5">Com o Credit Score Simulator você consulta gratuitamente o seu Score</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'banner-component'
  }
</script>

<style lang="scss">
  .banner{
    background-image: url('../../../src/assets/img-banner-background.jpg');
    height: 100vh;
    background-color: lightgray;
    background-repeat: no-repeat;
    background-position: right ;
    background-size: cover;
    position: relative;
    .row {
      height: 100%;
      .filter {
        position: absolute;
        background-color: rgba(2,19,49,0.47);
        border: 0;
        box-shadow: none;
        height: 100%;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
      }
      img{
        width: 20em!important;
      }
      .content-banner h1 {
        font-size: 1.5rem;
        font-weight: lighter;
      }
    }
  }
</style>
