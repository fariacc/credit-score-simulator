<template>
  <router-link class="navbar-brand" to="/">
    <img class="brand d-none d-md-flex d-lg-flex d-xl-flex py-2" src="../../../src/assets/credit-score-logo.png" alt="Company logo">
    <img class="logo d-sm-flex d-md-none d-lg-none d-xl-none py-2" src="../../../src/assets/credit-score-logo.png" alt="Company logo">
  </router-link>
</template>

<script>
  export default {
    name: 'logo-component'
  }
</script>

<style lang="scss">
  a.navbar-brand {
    padding-top: 0px;
    padding-bottom: 0px;
  }
  img {
    &.brand{
      width: 22vw;
    }
    &.logo{
      width: 40vw;
    }
  }
</style>
