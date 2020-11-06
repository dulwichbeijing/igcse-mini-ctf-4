<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ sub }} - 🔴 🟣 🔵 🟢</h2>
    
    <h3>About the competition</h3>
    <p>
      You have 2 hours to complete as many of the challenges below as possible. 
      The first few tasks are simple then get progressively harder, you can attempt them in any order.
    </p>
    <p>
      You should give all of your answers in the following format: 
      <pre>dhszCTF{secret_message}</pre>
    </p>
    
    <h3>Tasks</h3>
    <Task 
      v-for="(task, index) in tasks" 
      :key="index"
      :name="task.name"
      :points="task.points"
      :detail="task.detail"
      :files="task.files"
      :md5="task.md5"
      :solved="task.solved"
    >
    </Task>
    
    <h3>Extra details</h3>
    <ul>
      <li><a href="https://github.com/DHSZ/house-programming-2020-2021" target="_blank" rel="noopener">Competition source code</a></li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Task from "./Task";

export default {
  name: 'Competition',
  components: {
    Task
  },
  props: {
    msg: String,
    sub: String
  },
  computed: mapState(['currentScore','tasks'])
}
</script>

<style scoped>
.hello {
  margin: 60px auto 120px;
  max-width: 800px;
  padding: 0 20px;
}

h1 {
  margin-bottom: 0;
}

h2 {
  margin-top: -5px;
}

h3 {
  margin: 60px 0 0;
}

pre {
  background: rgba(0,0,0,0.025);
  padding: 15px;
  line-height: 1;
  border-radius: 5px;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 0 0 20px;
}

</style>
