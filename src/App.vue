<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import './assets/style/base.css'
  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 7.5rem;
    background: #fff;
  }
</style>
