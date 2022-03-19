<template>
  <div class="demo">
    <button @click="get">GET https://www.api.com/remote</button>
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
      this.msg = 'loading...';
      axios.get('https://www.api.com/remote').then(res => {
        this.msg = JSON.stringify(res.data);
      }).catch(err => {
        this.msg = err.message;
      });
    },
  }
}
</script>
<style scoped src="./demo.css">
