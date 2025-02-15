<template>
  <div>
    <Banner/>
    <div class="main-container">
      <h1>Monte o seu burger:</h1>
      <FormularioBurguer/>
    </div>
  </div>
</template>

<script>
import FormularioBurguer from '@/components/FormularioBurguer.vue';
import Banner from '../components/Banner'

export default {
  name: 'Home',

  components: {
    Banner,FormularioBurguer,
  }
}
</script>