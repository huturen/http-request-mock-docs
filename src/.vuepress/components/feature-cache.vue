<template>
  <div class="demo">
    <div>
      Todo: <input v-model.trim="todo" type="text" maxlength="30" size="30" />
      <button @click="add">Add</button>
    </div>

    <table>
      <tr><th>ID</th><th>Todo</th><th>Status</th><th>Delete</th></tr>
      <tr v-for="item in todos">
        <td>{{item.id}}</td>
        <td>{{item.todo}}</td>
        <td>{{item.done ? 'Completed' : 'Pending'}}</td>
        <td><button @click="del(item.id)">Delete</button></td>
      </tr>
    </table>
    <div class="tips">Hit F12 to access Developer Tools and view the console logs.</div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      todo: '',
      todos: []
    }
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      axios.get('https://some.api.com/todo').then(res => (this.todos = res.data));
    },

    async add() {
      if (!this.todo) {
        return alert('please input a todo item.');
      }

      const api = 'https://some.api.com/todo?action=add&todo='+this.todo;

      await axios.get(api).then(res => alert('Result:' + res.data.msg));
      this.todo = '';
      this.getList();
    },

    async del(id) {
      const sure = window.confirm('Are you sure?');
      if (!sure) return;

      const api = 'https://some.api.com/todo?action=del&id='+id;

      await axios.get(api).then(res => alert('Result:' + res.data.msg));
      this.getList();
    }
  }
}
</script>
<style scoped>

</style>
