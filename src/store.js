import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
  // plugins: [createPersistedState({
  //   storage: window.localStorage,
  // })],
  state: {
    colourScheme: "dhsz",
    currentScore: 0,
    tasks: [
      {
        name: "The first one is free",
        points: 100,
        detail: "Quickly test that the website is working for you, the answer is:",
        monospace: "dhszCTF{dulwich}",
        files: [],
        md5: "b33f71ec11ddcd26346f065288e32c6d",
        solved: false
      },
      {
        name: "This is supposed to be English?",
        points: 200,
        detail: "You have just received the following text message, but something has clearly gone wrong...",
        monospace: "01100100 01101000 01110011 01111010 01000011 01010100 01000110 01111011 01101010 01110101 01110011 01110100 01011111 01100001 01110011 01100011 01101001 01101001 01111101",
        files: [],
        md5: "ae29606ccf70ff6c3467f1db1d6e9ef5",
        solved: false
      },
      {
        name: "Who shot this photograph?",
        points: 200,
        detail: "There is something hidden within this photograph file, apparently the artist is very famous? So meta.",
        files: [
          "https://dhsz.github.io/house-coding-2020-2021/task-files/task3.jpg"
        ],
        md5: "0648029be255cfc4705d4e06cabdd4b2",
        solved: false
      },
      {
        name: "Let's get cracking!",
        points: 350,
        detail: "You have just intercepted the following message. Unfortunately, it's still encrypted!",
        monospace: "Gkkf zr okt mk, vbcwolrsjm colrabwrbir gsfb z cazhl!\n\nZjouzo, okt zwb lwkxzxgo gkkfsjm nkw z ngzm, obe?\n\nAbwb sr se:\n\nvaepCRN{xwbzf_bjsmhz}",
        files: [],
        md5: "4c2ebc59439f45360b16ee56ddda798d",
        solved: false
      },
      {
        name: "Chicken?",
        points: 300,
        detail: "There's something strange about this web page, but I'm not sure what...",
        files: ["https://dhsz.github.io/house-coding-2020-2021/task-files/task5/"],
        md5: "06bebf2341bb8611c3ac1249f61a07f6",
        solved: false
      },
      {
        name: "PyTech Tech Ltd.",
        points: 250,
        detail: "We're doing our best to break into the PyTech Tech servers. We don't know the password, but we have found their password checking algorithm!",
        files: ["https://github.com/DHSZ/house-coding-2020-2021/blob/gh-pages/task-files/task6.py"],
        md5: "753d05bd192095e39c8e72eba7bc8b09",
        solved: false
      }
    ]
  },
  mutations: {
    pushPoints(state, task) {
      state.currentScore = state.currentScore + task.points
      state.tasks[task.number].solved = true
    },
    updateColour(state, newColour) {
      state.colourScheme = newColour
    }
  }
});