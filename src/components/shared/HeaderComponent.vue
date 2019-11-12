<template>
  <div class="mb-1">
    <h2 class="text-center">{{ header }}</h2>
    <p-component classe="titulo" :texto="titulo"></p-component>
  </div>
</template>

<script>
  import PComponent from './PComponent.vue'
  import IconsComponent from './IconsComponent.vue'
  export default {
    name: 'header-component',
    components: {
      PComponent, IconsComponent
    },
    props: {
      header: String, titulo: String
    }
  }
</script>

<style lang="scss" scoped>
  h2 {
    color: #41698E;
    font-weight: 900;
  }
</style>
