<template>
    <div class="points">
        <span>{{currentScore}}</span>
        <span>points</span>
    </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
    name: 'Points',
    computed: mapState(['currentScore'])
}
</script>
<style scoped>
    .points {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 15px;
        font-weight: bold;
        text-align: left;
        background: #eee;
    }

    .points span:first-child {
        display: inline-block;
        text-align: right;
        min-width: 40px;
        margin-right: 5px;
    }
</style>