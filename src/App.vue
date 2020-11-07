<template>
  <div id="app" :class="colourScheme">
    <Competition msg="DHSZ House Coding 2020-21" sub="Capture The Flag"/>
    <Points score="0"></Points>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Competition from './components/Competition'
import Points from './components/Points'

export default {
  name: 'App',
  components: {
    Competition,
    Points
  },
  computed: mapState(["colourScheme"])
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

[type="text"],
select {
  border-radius: 5px;
  border: 1px solid #ddd;
  padding: 10px;
  background: #fff;
  font-family: 'Courier New', Courier, monospace;
}

button {
  border-radius: 5px;
  border: 1px solid #ddd;
  padding: 10px;
}

button:hover {
  background: #ddd;
  cursor: pointer;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #291720;
  padding-top: 60px;
  padding-bottom: 120px;
  background: #efefef;
}

#app:before {
  content: "";
  height: 15px;
  width: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(-90deg, #E9190F, #820263, #2364AA, #065143);
}

/* Fan style */
#app.f { background: rgba(130, 2, 99, 0.05); }
#app.f:before { background: #820263; }
#app.f a { color: #820263; }

/* Gren style */
#app.g { background: rgba(6, 81, 67, 0.05); }
#app.g:before { background: #065143; }
#app.g a { color: #065143; }

/* Raleigh style */
#app.r { background: rgba(233, 25, 15, 0.05); }
#app.r:before { background: #E9190F; }
#app.r a { color: #E9190F; }

/* Spen style */
#app.s { background: rgba(35, 100, 170, 0.05); }
#app.s:before { background: #2364AA; }
#app.s a { color: #2364AA; }

</style>
