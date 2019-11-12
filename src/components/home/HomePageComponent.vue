<template>
  <div class="home-page-component">
    <div class="conta text-center">
      <img class="brand d-none mx-auto d-md-flex d-lg-flex d-xl-flex py-2" src="../../../src/assets/credit-score-logo.png" alt="Company logo">
      <img class="logo d-sm-flex mx-auto d-md-none d-lg-none d-xl-none py-2" src="../../../src/assets/credit-score-logo.png" alt="Company logo">
      <!-- <img class="logo d-block mx-auto" src="../../../src/assets/credit-score-logo.png" alt="Company logo"> -->
      <router-link to="/login">
        <button type="button" class="btn btn-outline">
          Acessar
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home-component'
  }
</script>

<style lang="scss">
  .home-page-component{
    background-image: linear-gradient(#213345, #737373);
    max-width: 100%;
    max-width: 100vw;
    min-height: 100vh;
    max-height: 100%;
    .conta{
      width: 50%;
      height: 30%;
      margin: auto;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      .logo{
        width: 70vw;
      }
      .brand{
        width: 30vw;
      }
    }
  }
</style>
