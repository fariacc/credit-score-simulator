<template>
  <div class="cadastro-positivo-form card">
    <form @submit="cadastrarInformacoes($event)">
      <div v-show="step == 0">
        <div class="form-field">
          <p-component classe="fs-title" texto="Informações de endereço"></p-component>
          <p-component classe="fs-subtitle" texto="Preencha os campos abaixo marcados com *"></p-component>
          <div class="row">
            <div class="form-group col-md-2">
              <label for="cep" class="control-label">CEP *</label>
              <the-mask class="form-control pr-0" v-model="register.cep" name="cep" :mask="['#####-###']" required/>
            </div>
            <select-component classediv="form-group col-md-4" labelselect="estado" label="Estado *" v-model="register.estado"
            name="estado" rotulo="Selecione o seu estado" :options="estados"></select-component>
            <input-component classediv="form-group col-md-6" labelinput="cidade" label="Cidade *" classeinput="form-control"
            tipoinput="text" v-model="register.cidade"></input-component>
          </div>
          <div class="row">
            <input-component classediv="form-group col-md-6" labelinput="endereco" label="Endereço *" classeinput="form-control"
            tipoinput="text" v-model="register.endereco"></input-component>
            <input-component classediv="form-group col-md-2" labelinput="numero" label="Número *" classeinput="form-control"
            tipoinput="text" v-model="register.numero"></input-component>
            <input-component classediv="form-group col-md-4" labelinput="complemento" label="Complemento" classeinput="form-control"
            tipoinput="text" v-model="register.complemento"></input-component>
          </div>
          <button-component @click.native.prevent="next('active')" tipo="button" classe="btn btn-outline" rotulo="Próximo"></button-component>
        </div>
      </div>
      <div v-show="step == 1">
        <div class="form-field">
          <p-component classe="fs-title" texto="Informações complementares"></p-component>
          <p-component classe="fs-subtitle" texto="Conte pra gente um pouco mais sobre você"></p-component>
          <div class="row">
            <select-component classediv="form-group col-md-4" labelselect="escolaridade" label="Escolaridade *" v-model="register.escolaridade"
            name="escolaridade" rotulo="Selecione a sua escolaridade" :options="escolaridades"></select-component>
            <div class="form-group col-md-3">
              <label for="renda" class="control-label">Renda *</label>
              <money class="form-control" v-model="register.renda" v-bind="money" required></money>
            </div>
            <select-component classediv="form-group col-md-5" labelselect="estadocivil" label="Estado civil *" v-model="register.estadocivil"
            name="estadocivil" rotulo="Selecione o seu estado civil" :options="relacionamentos"></select-component>
          </div>
          <div class="col-md-12">
            <button-component @click.native.prevent="prev('')" tipo="button" classe="btn btn-default-2" rotulo="Anterior"></button-component>
            <button-component tipo="submit" classe="btn btn-outline" rotulo="Salvar"></button-component>
          </div>
        </div>
      </div>
    </form>
    <modal-component v-if="showModal" @close="showModal = false">
      <h3 slot="header">Cadastro Positivo</h3>
      <h6 slot="body" class="text-center"><i :class="icone" aria-hidden="true"></i> {{message}}</h6>
      <h5 slot="footer" v-show="irPerfil == 1"><button tipo="button" class="btn btn-default" @click="irParaPerfil">Ir para Perfil</button></h5>
    </modal-component>
  </div>
</template>

<script>
  import axios from 'axios';
  import SelectComponent from '../shared/SelectComponent.vue'
  import PComponent from '../shared/PComponent.vue'
  import ButtonComponent from '../shared/ButtonComponent.vue'
  import InputComponent from '../shared/InputComponent.vue'
  import ModalComponent from '../shared/ModalComponent.vue'
  export default {
    name: 'cadastro-positivo-form-component',
    components: {
      SelectComponent, PComponent, ButtonComponent, InputComponent, ModalComponent
    },
    data() {
      return {
        icone: null, message: null, showModal: false, step: 0, irPerfil: null,
        money: {
          decimal: ',', thousands: '.', prefix: 'R$ ', precision: 2, masked: false
        },
        register: {
          cep: null, estado: null, cidade: null, endereco: null, numero: null, complemento: null, escolaridade: null, renda: 0, estadocivil: null
        },
        estados: {
          'Acre': 'AC', 'Alagoas': 'AL', 'Amapá': 'AP', 'Amazonas': 'AM', 'Bahia': 'BA', 'Ceará': 'CE', 'Distrito Federal': 'DF',
          'Espírito Santo': 'ES', 'Goiás': 'GO', 'Maranhão': 'MA', 'Mato Grosso': 'MT', 'Mato Grosso do Sul': 'MS', 'Minas Gerais': 'MG',
          'Pará': 'PA', 'Paraíba': 'PB', 'Paraná': 'PR', 'Pernambuco': 'PE', 'Piauí': 'PI', 'Rio de Janeiro': 'RJ', 'Rio Grande do Norte': 'RN',
          'Rio Grande do Sul': 'RS', 'Rondônia': 'RO', 'Roraima': 'RR', 'Santa Catarina': 'SC', 'São Paulo': 'SP', 'Sergipe': 'SE', 'Tocantins': 'TO'
        },
        escolaridades:  {
          'Analfabeto': 1, 'Ensino fundamental': 2, 'Ensino médio': 3, 'Ensino superior': 4, 'Pós graduação': 5
        },
        relacionamentos: {
          'Solteiro(a)': 1, 'Casado(a)': 2, 'Divorciado(a)': 3, 'Separado(a) judicialmente': 4, 'Viúvo(a)': 5
        }
      }
    },
    methods: {
      irParaPerfil(){
        this.showModal = false
        this.$router.push('/perfil')
      },
      cadastrarInformacoes(event) {
        if(this.register.cep && this.register.estado && this.register.cidade && this.register.endereco && this.register.numero && this.register.complemento && this.register.escolaridade && this.register.renda && this.register.estadocivil){
          this.showModal = true
          this.message = 'Informações cadastradas'
          this.icone = 'text-success far fa-lg fa-check-circle'
          this.irPerfil = 1
        }
        else {
          this.showModal = true
          this.message = 'Preencha todos os campos obrigatórios'
          this.icone = 'text-danger far fa-lg fa-times-circle'
          this.irPerfil = 0
        }
        event.preventDefault()
      },
      prev(classe) {
        this.$emit('clickPrev', classe, this.step)
        this.step--
      },
      next(classe) {
        if (this.register.cep && this.register.estado && this.register.cidade && this.register.endereco && this.register.numero){
          this.step++
          this.$emit('clickNext', classe, this.step)
        }
        else{
          event.preventDefault()
          this.showModal = true
          this.irPerfil = 0
          this.message = 'Preencha todos os campos obrigatórios'
          this.icone = 'text-danger far fa-lg fa-times-circle'
        }
      }
    },
    created(){
      this.register.cep = '12345-678',
      this.register.estado = 'PR',
      this.register.cidade = 'Curitiba',
      this.register.endereco = 'Av. Sete de Setembro',
      this.register.numero = '1001',
      this.register.complemento = 'Apto 10',
      this.register.escolaridade = 'Superior incompleto',
      this.register.renda = 'R$ 5678,00',
      this.register.estadocivil = 'Solteira'
    }
  }
</script>

<style lang="scss">
  .cadastro-positivo-form{
    text-align: center;
    position: relative;
    margin-bottom: 0;
    width: 50%;
    height: 80%;
    margin: auto;
    .form-field{
      padding: 2vh 2vw;
      height: 100%;
    }
  }
</style>
