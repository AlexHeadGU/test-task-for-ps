<template>
    <div>
      <button v-on:click="getData">Поприветствовать</button>
    </div>
  </template>
  
  <script>
  import { mapActions} from 'vuex'
  export default {
    name: 'v-city-part',
    components: {

    },
    data() {
    return {

    }
    },
    computed: {},
    methods: {
      ...mapActions([
      'GET_DATA'
    ]),

      getData() {
        this.GET_DATA()

    },
    },
    mounted () {
      this.getData();
    }
  }
  
  </script>
  
  <style lang="scss">
</style>