<template>
  <div id="app">
    <Competition msg="DHSZ House Programming 2020-21" sub="Capture The Flag"/>
    <Points score="0"></Points>
  </div>
</template>

<script>
import Competition from './components/Competition'
import Points from './components/Points'

export default {
  name: 'App',
  components: {
    Competition,
    Points
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

h1, h2, h3 {
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
}

a {
  color: #2364AA;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #291720;
  margin-top: 0;
}

#app:before {
  content: "";
  height: 15px;
  display: block;
  background: linear-gradient(-90deg, #E9190F, #820263, #2364AA, #065143);
}
</style>
