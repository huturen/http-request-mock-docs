<template>
  <div class="demo">
    <button @click="getRemote1">GET https://www.api.com/remote1</button>
    &nbsp;&nbsp;
    <button @click="getRemote2">GET https://www.api.com/remote2</button>
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
    getRemote1() {
      this.msg = 'loading...';
      axios.get('https://www.api.com/remote1').then(res => {
        this.msg = JSON.stringify(res.data);
      }).catch(err => {
        this.msg = err.message;
      });
    },

    getRemote2() {
      this.msg = 'loading...';
      axios.get('https://www.api.com/remote2').then(res => {
        this.msg = JSON.stringify(res.data);
      }).catch(err => {
        this.msg = err.message;
      });
    },
  }
}
</script>
<style scoped src="./demo.css">
