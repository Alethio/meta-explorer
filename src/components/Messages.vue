<template>
  <table class="table table-striped">
    <thead>
    <tr>
      <th scope="col">Type</th>
      <th scope="col">Message ID</th>
      <th scope="col">First Seen</th>
      <th scope="col">From</th>
      <th scope="col">To</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="msg in messages">
      <td>{{msg.attributes.msgType}}</td>
      <td>{{parseMessageIDFromMessage(msg.id)}}</td>
      <td>{{new Date(msg.attributes.blockCreationTime * 1000)}}</td>
      <td>{{msg.relationships.from.data.id}}</td>
      <td>{{msg.relationships.to.data.id}}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    props: ['messages'],
    methods: {
      parseMessageIDFromMessage(msg) {
        let msgParts = msg.split(":", -1)
        return msgParts[1]
      }
    }
  }
</script>

<style scoped>

</style>
