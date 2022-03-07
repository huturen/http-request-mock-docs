<template>
  <div class="demo">
    <button @click="get">GET https://www.api.com/faker</button>
    <pre class="result"> {{ msg }} </pre>
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
      axios.get('https://www.api.com/faker').then(res => {
        this.msg = JSON.stringify(res.data, null, 4);
      });
    },
  }
}
</script>
<style scoped src="./demo.css">
