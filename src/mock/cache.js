/**
 * @url https://some.api.com/todo
 */
const faker = require('http-request-mock/plugin/faker');
const cache = require('http-request-mock/plugin/cache');

const data = [...Array(5)].map(() => ({
  id: faker.incrementId(1, 'todos'),
  todo: faker.sentence(5),
  done: !!faker.rand(0, 1),
}));

// The [data] will be memoried by localStorage.
// You can check it by localStorage.getItem('mock-todos').
const todos = cache('mock-todos', data);

module.exports = (request) => {
  if (request.query.action === 'add') {
    return add(request.query);
  }
  if (request.query.action === 'del') {
    return del(request.query);
  }
  return todos;
};

function add(query) {
  todos.push({
    id: ((todos[todos.length-1] || {}).id || 0) + 1,
    todo: query.todo,
    done: false
  });
  return { code: 0, msg: 'ok' };
}

function del(query) {
  const index = todos.findIndex(todo => todo.id === +query.id);
  todos.splice(index, 1);
  return { code: 0, msg: 'ok' };
}
