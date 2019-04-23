<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">

    <a class="navbar-brand">Contract Monitor</a>

    <input type="text" class="form-control mr-sm-2" placeholder="Contract Address" v-model="contractAddress">
    <button class="btn btn-outline-success my-2 my-sm-0" @click="addressSubmitted">Search</button>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      contractAddress: ''
    }
  },
  methods: {
    addressSubmitted() {
      this.$emit('addressSubmitted', this.contractAddress)
    }
  }
}
</script>

<style scoped>
</style>
