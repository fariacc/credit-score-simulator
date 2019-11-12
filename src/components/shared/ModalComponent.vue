<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header"></slot>
            <button type="button" class="btn btn-close" @click="$emit('close')">x</button>
          </div>
          <div class="modal-body">
            <slot name="body"></slot>
          </div>
          <div class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import ButtonComponent from './ButtonComponent.vue'
  export default {
    name: 'modal-component',
    components: {
      ButtonComponent
    },
    methods: {
      close() {
        this.$emit('close')
      }
    }
  }
</script>

<style lang="scss">
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
    .modal-wrapper {
      display: table-cell;
      vertical-align: middle;
      .modal-container {
        width: 40vw;
        margin: 0px auto;
        transition: all .3s ease;
        .modal-header{
          padding: 0;
          color: #ffffff;
          padding-left: 1vw;
          padding-top: 0.5vh;
          background-color: #213345;
          h3{
            margin-left: auto;
            margin-right: auto;
          }
        }
        .modal-body {
          background-color: #fff;
        }
        .modal-footer {
          padding: 0;
          padding-right: 1vw;
          background-color: #fff;
        }
      }
    }
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container, .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>
