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
        name: "Compiler or interpreter?",
        points: 200,
        detail: "Did you know it's possible to compile Python code? I just did it. The flag is hidden in this executable.",
        monospace: "",
        files: ["https://raw.githubusercontent.com/dulwichbeijing/igcse-mini-ctf-4/main/public/task-files/obsure.cpython-311.opt-2.pyc"],
        md5: "3dfc8f1bbe4912b199b1989e057b4592", // done
        solved: false
      },
      {
        name: "Let Me Code (LMC)",
        points: 200,
        detail: "Little men, assemble! Run this code and then output the result within the usual flag format",
        monospace: "dcbCTF{output_goes_here}",
        files: ["https://raw.githubusercontent.com/dulwichbeijing/igcse-mini-ctf-4/main/public/task-files/lmc.txt"],
        md5: "20129e7e6f97015d68e1704e70ef106a", // done
        solved: false
      },
      {
        name: "Just a bit of string manipulation",
        points: 200,
        detail: "Something weird has happened to the flag. I know the following output after running it through the attached program",
        monospace: "dcbctfnurts{h`1vu~",
        files: ["https://raw.githubusercontent.com/dulwichbeijing/igcse-mini-ctf-4/main/public/task-files/string_manipulation.py"],
        md5: "c19f6f435e98ca0cd10e69c9c16c278f", // done
        solved: false
      },
      {
        name: "",
        points: 200,
        detail: "",
        files: [""],
        md5: "", // done
        solved: false
      },
      {
        name: "",
        points: 200,
        detail: "",
        files: [""],
        md5: "", // done
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