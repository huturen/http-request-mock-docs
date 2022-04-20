<template>
  <div class="demo">
    <div v-for="(url, index) in urls">
      <button @click="get(index)">GET {{url}}</button>
    </div>
    <pre class="result"> {{ msg }} </pre>
    <div class="tips">Hit F12 to access Developer Tools and view the console logs.</div>
  </div>
</template>

<script>
import axios from 'axios';
import HttpRequestMock from 'http-request-mock/http-request-mock.js';

export default {
  data() {
    return {
      urls: [
        'https://www.api.com/cross',
        'https://some.api.com/cross',
        'http://some.abc.com:8899/cross',
        'http://xyz.123.org/cross',
        'https://www.example.com/cross',
        'http://other.domain.com/cross',
      ],
      msg: '',
    }
  },
  mounted () {
    const mocker = HttpRequestMock.setup();
    this.urls.forEach(url => {
      mocker.get(url, `Requested ${url} at: ${new Date().toLocaleString()}`);
    })
  },
  methods: {
    get(index) {
      axios.get(this.urls[index]).then(res => {
        this.msg = res.data;
      }).catch(err => {
        this.msg = err.message;
      })
    },
  }
}
</script>
<style scoped src="./demo.css">
