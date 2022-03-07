<template>
  <div class="demo">
    <button @click="get">GET https://www.api.com/status404</button>
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
      axios.get('https://www.api.com/status404').catch(err => {
        this.msg = err.message; // Request failed with status code 404
      });
    },
  }
}
</script>
<style scoped src="./demo.css">
