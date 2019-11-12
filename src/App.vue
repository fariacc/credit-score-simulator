<template>
  <div id="app">
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  .page-enter, .page-leave-active{
    opacity: 0;
  }
  .page-enter-active, .page-leave-active{
    transition: opacity .4s;
  }
</style>
