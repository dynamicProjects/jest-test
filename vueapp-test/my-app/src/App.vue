<template>
<div id="app">
<img alt = "Vue Logo" src= "./assets/logo.png">
<MessageComponent msg = "This is my first vue app!" />
</div>
</template>
<script>
import MessageComponent from './components/MessageComponent.vue'

export default {
  name: 'App',
  components: {
    MessageComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
