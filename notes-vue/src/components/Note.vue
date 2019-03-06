<template>
  <div>
    <input v-model="title" placeholder="Title">
    <br>
    <textarea v-model="text" placeholder="Text"></textarea>
    <br>
    <button />
  </div>
</template>

<script>
export default {
  name: 'Note',
  props: {
    title: String,
    text: String
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
