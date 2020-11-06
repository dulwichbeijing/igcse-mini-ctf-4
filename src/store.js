import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentScore: 0,
    tasks: [
      {
        name: "Check you're all set up",
        points: 100,
        detail: "The answer to this task is dhszCTF{dulwich}",
        files: [],
        md5: "b33f71ec11ddcd26346f065288e32c6d",
        solved: false
      },
      {
        name: "Check you're all set up",
        points: 100,
        detail: "The answer to this task is dhszCTF{dulwich}",
        files: [],
        md5: "b33f71ec11ddcd26346f065288e32c6d",
        solved: false
      },
      {
        name: "Check you're all set up",
        points: 100,
        detail: "The answer to this task is dhszCTF{dulwich}",
        files: [],
        md5: "b33f71ec11ddcd26346f065288e32c6d",
        solved: false
      },
      {
        name: "Check you're all set up",
        points: 100,
        detail: "The answer to this task is dhszCTF{dulwich}",
        files: [],
        md5: "b33f71ec11ddcd26346f065288e32c6d",
        solved: false
      },
      {
        name: "Check you're all set up",
        points: 100,
        detail: "The answer to this task is dhszCTF{dulwich}",
        files: [],
        md5: "b33f71ec11ddcd26346f065288e32c6d",
        solved: false
      }
    ]
  },
  mutations: {
    pushPoints(state, addedPoints) {
      state.currentScore = state.currentScore + addedPoints
    }
  }
});