<template>
  <div class="demo">
    <button @click="get">GET https://www.api.com/headers</button>
    <div class="result"> {{ msg }} </div>
    <div class="tips">PHit F12 to access Developer Tools and view the console logs.</div>
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
      axios.get('https://www.api.com/headers').then(res => {
        this.msg = JSON.stringify(res.headers);
      });
    },
  }
}
</script>
<style scoped src="./demo.css">
