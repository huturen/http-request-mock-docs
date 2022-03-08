<template>
  <div class="demo">
    <button @click="get">GET https://jsonplaceholder.typicode.com/albums/1</button>
    <span>Status: <b>{{ mockItem.disable === 'YES' ? 'Disabled' : 'Enabled' }}</b></span>
    <button @click="toggle">
      {{ mockItem.disable === 'NO' ? 'Disable' : 'Enable' }} it
    </button>
    <div class="result"> {{ msg }} </div>
    <div class="tips">Hit F12 to access Developer Tools and view the console logs.</div>
  </div>
</template>

<script>
import axios from 'axios';
import HttpRequestMock from 'http-request-mock';
export default {
  data() {
    return { msg: '', mockItem: {} }
  },
  mounted () {
    const mocker = HttpRequestMock.setup();
    this.mockItem = mocker.matchMockItem('https://jsonplaceholder.typicode.com/albums/1');
  },
  methods: {
    get() {
      axios.get('https://jsonplaceholder.typicode.com/albums/1').then(res => {
        this.msg = res.data;
      }).catch(err => {
        this.msg = err.message;
      })
    },
    toggle() {
      this.mockItem.disable = this.mockItem.disable === 'NO' ? 'YES' : 'NO';
    },
  }
}
</script>
<style scoped src="./demo.css">
