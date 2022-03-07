<template>
  <div class="demo">
    <button @click="get">GET https://www.api.com/dynamic-response</button>
    <div class="result"> {{ msg }} </div>
    <div class="tips">Hit F12 to access Developer Tools and view the console logs.</div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return { index: 0, msg: '' }
  },
  methods: {
    get() {
      axios.get('https://www.api.com/dynamic-response?i=' + (++this.index)).then(res => {
        this.msg = res.data;
      });
    },
  }
}
</script>
<style scoped src="./demo.css">
