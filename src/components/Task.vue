<template>
    <div class="task">
        <div class="task__title">
            <h4>{{ name }}</h4>
            <strong>{{ points }}</strong>
        </div>
        <p>{{ detail }}</p>
        <ul>
            <li v-for="(file, index) in files" :key="index">
                <a :href="file">{{`Link ${index + 1}`}}</a>
            </li>
        </ul>
        <div class="task__answer">
            <label :for="md5">
                Enter your flag here:
            </label>
            <input :name="md5" type="text" v-model="flag" placeholder="dhszCTF{...}">
            <button @click="checkFlag">{{ (checking) ? "Checking..." : "Check" }}</button>
        </div>
        <div v-if="message !== ''" class="task__message">{{ message }}</div>
    </div>    
</template>
<script>
import md5 from "md5"
import store from "../store"

export default {
    name: 'Task',
    data() {
        return {
            flag: "",
            active: true,
            checking: false,
            isCorrect: false,
            message: "",
        }
    },
    props: {
        name: String,
        points: Number,
        detail: String,
        files: Array,
        md5: String
    },
    methods: {
        checkFlag() {
            this.checking = true
            setTimeout(()=> {
                this.isCorrect = md5(this.flag) === this.md5
                if (this.isCorrect) {
                    this.checking = false
                    this.message = "That is correct!"
                    this.active = false
                    store.commit('pushPoints', this.points)
                } else {
                    this.checking = false
                    this.message = "That flag is not correct, please try again!"
                }
            }, 500)
        }
    }
}
</script>
<style scoped>
    .task {
        border: 1px solid #eee;
        padding: 15px 15px 30px;
        border-radius: 5px 5px;
        margin-top: 20px;
        margin-bottom: 40px;
        position: relative;
        overflow: hidden;
    }

    .task:after {
        content: "";
        position: absolute;
        height: 15px;
        bottom : 0;
        left: 0;
        width: 100%;
        display: block;
        background: linear-gradient(-90deg, #E9190F, #820263, #2364AA, #065143);
    }   

    .task__title {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .task__title h4 {
        font-size: 120%;
        margin: 5px 0;
    }
    
    .task__title strong {
        font-size: 175%;
        opacity: 0.8;
    }

    .task__title strong:after {
        content: "points";
        font-size: 60%;
        margin-left: 4px;
    }

    .task__answer {
        display: flex;
        justify-content: space-between;
        border-top: 1px solid #eee;
        margin-top: 15px;
        padding-top: 15px;
    }

    .task__answer label {
        align-self: center;
        margin-right: 10px;
    }

    .task__answer input {
        margin-right: 15px;
        flex-grow: 1;
    }

    .task__answer button {
        min-width: 120px;
    }

    .task__message {
        margin-top: 15px;
        text-transform: uppercase;
        font-size: 80%;
        opacity: 0.8;
    }
</style>