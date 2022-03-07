<template>
  <div class="demo">
    <button @click="get">GET https://jsonplaceholder.typicode.com/todos/1</button>
    <span>Count: {{count}}</span>
    <button @click="reset">Reset</button>
    <div class="result"> {{ msg }} </div>
    <div class="tips">Hit F12 to access Developer Tools and view the console logs.</div>
  </div>
</template>

<script>
import axios from 'axios';
import HttpRequestMock from 'http-request-mock';
export default {
  data() {
    return { msg: '', mockItem: null, count: 0 }
  },
  mounted () {
    const mocker = HttpRequestMock.setup();
    this.mockItem = mocker.matchMockItem('https://jsonplaceholder.typicode.com/todos/1');
  },
  methods: {
    get() {
      ++this.count;
      axios.get('https://jsonplaceholder.typicode.com/todos/1').then(res => {
        this.msg = res.data;
      }).catch(err => {
        this.msg = err.message;
      })
    },
    reset() {
      this.count = 0;
      this.mockItem.times = 2;
    }
  }
}
</script>
<style scoped src="./demo.css">
