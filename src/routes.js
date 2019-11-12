import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePageComponent from './components/home/HomePageComponent.vue'
import LoginTemplate from './components/login/LoginTemplate.vue'
import RegisterTemplate from './components/register/RegisterTemplate.vue'
import PerfilTemplate from './components/perfil/PerfilTemplate.vue'
import ComoFuncionaTemplate from './components/comoFunciona/ComoFuncionaTemplate.vue'
import ResetPasswordTemplate from './components/reset/ResetPasswordTemplate.vue'
import CadastroPositivoTemplate from './components/cadastroPositivo/CadastroPositivoTemplate.vue'
import AlterarCadastroTemplate from './components/alterarCadastro/AlterarCadastroTemplate.vue'
import ResetarSenhaTemplate from './components/reset/ResetarSenhaTemplate.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '',
    name: 'Home',
    component: HomePageComponent
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginTemplate
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterTemplate
  },
  {
    path: '/reset',
    name: 'Reset',
    component: ResetPasswordTemplate
  },
  {
    path: '/resetarSenha',
    name: 'Resetar Senha',
    component: ResetarSenhaTemplate
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: PerfilTemplate
  },
  {
    path: '/como-funciona',
    name: 'Como funciona',
    component: ComoFuncionaTemplate
  },
  {
    path: '/cadastro-positivo',
    name: 'Cadastro Positivo',
    component: CadastroPositivoTemplate
  },
  {
    path: '/alterar-cadastro',
    name: 'Alterar Cadastro',
    component: AlterarCadastroTemplate
  }
];
