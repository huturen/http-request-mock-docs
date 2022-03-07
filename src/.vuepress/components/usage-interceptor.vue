<template>
  <div class="demo">
    <div>
      <button @click="getResult(0)">Get https://jsonplaceholder.typicode.com/photos/1?p=0</button>
      <span class="tips">=> use mock result.</span>
      <div class="result"> {{ msg[0] || '' }} </div>
    </div>
    <div>&nbsp;</div>
    <div>
      <button @click="getResult(1)">Get https://jsonplaceholder.typicode.com/photos/1?p=1</button>
      <span class="tips">=> bypass mocking and do real network request.</span>
      <div class="result"> {{ msg[1] || '' }} </div>
    </div>
    <div class="tips">Hit F12 to access Developer Tools and view the console logs.</div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return { msg: {0: '', 1: ''} }
  },
  methods: {
    getResult(p) {
      axios.get('https://jsonplaceholder.typicode.com/photos/1?p='+p).then(res => {
        this.msg[p] = res.data;
      }).catch(err => {
        this.msg[p] = 'error: ' + err.message;
      })
    }
  }
}
</script>
<style scoped src="./demo.css">
