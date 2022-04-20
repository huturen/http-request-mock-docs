<template>
  <div class="demo">
    <button @click="getResult">Get https://some.api.com/some-path</button>
    <div class="result"> {{ msg }} </div>
    <div class="tips">Hit F12 to access Developer Tools and view the console logs.</div>
  </div>
</template>

<script>
import HttpRequestMock from 'http-request-mock/http-request-mock.js';
import axios from 'axios';
export default {
  data() {
    return { msg: '' }
  },
  mounted() {
    const mocker = HttpRequestMock.setup()
    mocker.get('https://some.api.com/some-path', '<div>some result</div>');
  },
  methods: {
    getResult() {
      axios.get('https://some.api.com/some-path').then(res => {
        this.msg = res.data;
      }).catch(err => {
        this.msg = 'error: ' + err.message;
      })
    }
  }
}
</script>
<style scoped src="./demo.css">
