<template>
    <Banner/>
    <main>
      <h1>Monte o seu burger:</h1>
      <FormularioBurguer/>
    </main>
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