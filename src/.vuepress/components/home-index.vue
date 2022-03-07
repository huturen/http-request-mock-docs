<template>
  <div class="demo">
    <button @click="get">GET https://api.com/xyz?a=1&b=2</button>
    <span class="tips"> => </span>
    <span class="result">{{msg}}</span>
    <div class="tips">Hit F12 to access Developer Tools and view the console logs.</div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return { msg: 'Click the left button and get the mock result.' }
  },
  mounted () {
    window.axios = axios;
  },
  methods: {
    get() {
      this.msg = 'loading...';
      axios.get('https://api.com/xyz?a=1&b=2').then(res => {
        this.msg = JSON.stringify(res.data);
      });
    },
  }
}
</script>
<style scoped src="./demo.css">
