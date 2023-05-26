import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.localStorage,
  })],
  state: {
    colourScheme: "dhsz",
    currentScore: 0,
    tasks: [
      {
        name: "The first one is free",
        points: 100,
        detail: "Quickly test that the website is working for you, the answer is:",
        monospace: "dcbCTF{dulwich}",
        files: [],
        md5: "faa85bfd7c5d216076e78b611229b137",
        solved: false
      },
      {
        name: "I thought Python was interpreted?",
        points: 200,
        detail: "Did you know it's possible to compile Python code? I just did it. The flag is hidden in this executable.",
        monospace: "",
        files: ["https://raw.githubusercontent.com/dulwichbeijing/igcse-mini-ctf-4/main/public/task-files/obsure.cpython-311.opt-2.pyc"],
        md5: "3dfc8f1bbe4912b199b1989e057b4592", // done
        solved: false
      },
      {
        name: "LMC",
        points: 200,
        detail: "Little men, assemble! Run this code and then output the result within the usual flag format",
        files: ["https://raw.githubusercontent.com/dulwichbeijing/igcse-mini-ctf-4/main/public/task-files/lmc.txt"],
        md5: "15b1524804fb3d7138fe732ea0e6f651", // done
        solved: false
      },
      {
        name: "Master manipulation",
        points: 200,
        detail: "Something weird has happened to the flag. This is the output I received after the flag was input into the attached program",
        monospace: "dcbctfnurts{h`1vu~",
        files: ["https://raw.githubusercontent.com/dulwichbeijing/igcse-mini-ctf-4/main/public/task-files/string_manipulation.py"],
        md5: "c19f6f435e98ca0cd10e69c9c16c278f", // done
        solved: false
      },
      {
        name: "The worlds most popular",
        points: 200,
        detail: "I was playing with a substitution cipher made with the worlds most popular language. Can you run the program and decrypt the flag? The output will be all UPPERCASE.",
        monospace: "GMPMUD{BEJU_AEAFZXK_ZXWHFXHT}",
        files: ["https://raw.githubusercontent.com/dulwichbeijing/igcse-mini-ctf-4/main/public/task-files/substitution.js"],
        md5: "4b1660262c16c3ee4b9b605d66b07623", // done
        solved: false
      },
      {
        name: "Debugging Base64",
        points: 200,
        detail: "The following information is encoded as a base64 string (whatever that means), Mr Rigby wrote a program to decode this data but it's not producing the right output...",
        monospace: "VmpKMGExUXlSbGRTV0doV1lUSlNjMVJVUmt0TmJHeHhVMnBTYkdKSFp6SldWekZoWVRGSmVXRklUbGhTUlhBeVdrUkdjMlJWTVVWTlJEQTk=",
        files: ["https://raw.githubusercontent.com/dulwichbeijing/igcse-mini-ctf-4/main/public/task-files/debug_me.py"],
        md5: "85b9d1028d3f8ff910d9f9e85afb3e29", // done
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