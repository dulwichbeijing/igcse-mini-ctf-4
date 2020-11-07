<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ sub }} - 🔴 🟣 🔵 🟢</h2>
    
    <h3>About the competition</h3>
    <p>
      Capture the flag is a style of hacking competition where a hidden message known as a "flag"
      needs to be located, calculated or decrypted.
    </p>
    <p>
      You have 2 hours to complete as many of the challenges below as possible. 
      The first few tasks are simple then get progressively harder, you can attempt them in any order.
    </p>
    <p>
      Once you have found your flag, you should submit your answer using the following format: 
      <pre>dhszCTF{secret_message}</pre>
    </p>
    
    <h3>Tasks</h3>
    <Task 
      v-for="(task, index) in tasks" 
      :key="index"
      :taskNo="index"
      :name="task.name"
      :points="task.points"
      :detail="task.detail"
      :monospace="task.monospace"
      :files="task.files"
      :md5="task.md5"
      :solved="task.solved"
    >
    </Task>
    
    <h3>Extra details</h3>
    <ul>
      <li><a href="https://github.com/DHSZ/house-programming-2020-2021" target="_blank">Competition source code</a></li>
      <li><a href="http://www.asciitable.com/" target="_blank">ASCII Table</a></li>
      <li><a href="https://imagemagick.org/" target="_blank">ImageMagick</a></li>
      <li><a href="https://hexed.it/" target="_blank">Hexadecimal Editor</a></li>
      <li><a href="https://magpi.raspberrypi.org/articles/ssh-remote-control-raspberry-pi">SSH for RaspPi</a></li>
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
  margin: 0 auto;
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
  background: #fefefe;
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
