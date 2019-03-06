<template>
  <div id="app">
    <MainPage/>
  </div>
</template>

<script>
import MainPage from './components/MainPage.vue'
import Note from './components/Note.vue'

export default {
  name: 'app',
  components: {
    MainPage,
    Note
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
