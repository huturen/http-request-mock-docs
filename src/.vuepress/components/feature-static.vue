<template>
  <div class="demo">
    <button @click="get">GET https://www.api.com/text-response</button>
    <button @click="post">POST https://www.api.com/json-response</button>
    <div class="result"> {{ msg }} </div>
    <div class="tips">Hit F12 to access Developer Tools and view the console logs.</div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return { msg: '' }
  },
  methods: {
    get() {
      axios.get('https://www.api.com/text-response').then(res => {
        this.msg = res.data;
      });
    },

    post() {
      axios.post('https://www.api.com/json-response', {abc: 123}).then(res => {
        this.msg = res.data;
      });
    }
  }
}
</script>
<style scoped src="./demo.css">
