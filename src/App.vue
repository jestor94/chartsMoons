<template>
  <div id="app">
    <Graphics />
  </div>
</template>

<script>
import Graphics from './components/Graphics'

export default {
  name: 'app',
  components: {
    Graphics
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
