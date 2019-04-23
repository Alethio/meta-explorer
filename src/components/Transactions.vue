<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">Txn Type</th>
        <th scope="col">Txn Hash</th>
        <th scope="col">First Seen</th>
        <th scope="col">From</th>
        <th scope="col">To</th>
        <th scope="col">Value (Ether)</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="txn in transactions">
        <td>{{txn.attributes.msgPayload.funcName}}</td>
        <td>{{txn.id}}</td>
        <td>{{new Date(txn.attributes.firstSeen * 1000)}}</td>
        <td>{{txn.relationships.from.data.id}}</td>
        <td>{{txn.relationships.to.data.id}}</td>
        <td>{{txn.attributes.value / (10**18)}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    props: ['transactions'],
  }
</script>

<style scoped>

</style>
