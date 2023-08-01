<template>
  <vCityPart></vCityPart>
</template>

<script>
  import vCityPart from './components/city-part/v-city-part'

  export default {
  name: 'app',
  components: {
    vCityPart
  },
  data() {
    return {}
  },

  methods: {}
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
