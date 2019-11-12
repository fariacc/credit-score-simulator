<template>
  <ul :class="classeul">
    <li v-for="item in items" :class="item.classe">
      <a class="nav-link" :href="item.href">{{ item.nome }}</span></a>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'ul-component',
    props: {
      classeul: String, item: Array, items: Array
    }
  }
</script>

<style lang="scss">
  .progressbar {
    margin-bottom: 3vh;
    margin-top: 6vh;
    overflow: hidden;
    counter-reset: step;
    width: 100vw;
    li {
      list-style-type: none;
      color: #ffffff;
      text-transform: uppercase;
      font-size: 0.65rem;
      width: 11.11%;
      float: left;
      position: relative;
      letter-spacing: 1px;
      z-index: 0;
      text-align: center;
      display: block;
      .nav-link{
        padding-left: 0;
        padding-right: 0;
      }
      &:before {
        content: counter(step);
        counter-increment: step;
        width: 4vh;
        height: 4vh;
        line-height: 25px;
        display: block;
        font-size: 0.9rem;
        color: #213345;
        background: #ffffff;
        border-radius: 25px;
        border: 2px solid #ec9100;
        margin: 0 auto;
        text-align: center;
      }
      &:after {
        content: '';
        width: 100%;
        height: 2px;
        background-color: #ec9100;
        position: absolute;
        top: 2vh;
        z-index: -1; /*put it behind the numbers*/
      }
      &.active{
        &:before, &:after {
          background: #ec9100;
          color: #ffffff;
        }
      }
      &:last-child:after {
        content: none;
      }
    }
  }
</style>
