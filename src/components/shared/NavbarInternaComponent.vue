<template>
  <div>
    <nav class="navbar">
      <div class="container-fluid">
        <logo-component></logo-component>
        <b-dropdown right text="Username" class="m-2">
          <b-dropdown-item v-for="(opcao, key) in opcoes" :to="opcao.route" v-if="key != 2" :key="opcao.index">&ensp;{{opcao.nome}}</b-dropdown-item>
          <b-dropdown-item v-else :key="opcao.index" @click="logout()">&ensp;{{opcao.nome}}</b-dropdown-item>
        </b-dropdown>
      </div>
    </nav>
  </div>
</template>

<script>
  import LogoComponent from '../shared/LogoComponent.vue'
  import ButtonComponent from '../shared/ButtonComponent.vue'
  export default {
    name: 'navbar-perfil-component',
    components: {
      LogoComponent, ButtonComponent
    },
    data(){
      return{
        usuario: false,
        opcoes: [
          {nome: 'Meu perfil', route: '/perfil'}, {nome: 'Alterar cadastro', route: '/alterar-cadastro'}, {nome: 'Sair', route: '/sair'},
        ],
      }
    },
    methods: {
      logout(){
        sessionStorage.clear()
        this.usuario = false
        this.$router.push('/login')
      }
    },
    created(){
      let usuarioAux = sessionStorage.getItem('usuario') //pega a info de "usuario"
      if (usuarioAux){
        this.usuario = JSON.parse(usuarioAux) //this.usuario recebendo as infos de usuario em forma de objeto
      }
    }
  }
</script>

<style lang="scss">
  .navbar {
    position: top!important;
    width: 100%;
    background-color: transparent;
    padding: 0px!important;
  	box-shadow: none;
    a{
      color: #213345;
      &:hover{
        text-decoration: none;
      }
    }
    .dropdown{
      .dropdown-toggle{
        background-color: transparent;
        border: 0;
        text-transform: uppercase;
        font-size: 0.9em;
        font-weight: bold;
      }
      .dropdown-divider{
        margin-top: 0px;
        margin-bottom: 0px;
      }
      .dropdown-menu{
        font-size: 0.9rem;
        .dropdown-item {
          color: #213345;
          background-color: transparent;
          padding: 0.4rem 0.6rem 0.4rem 0.6rem;
          &:hover{
            background-color: #e9ecef;
          }
        }
      }
    }
  }
</style>
