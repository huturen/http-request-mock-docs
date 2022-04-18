/**
 * @url https://www.api.com/faker
 * @method any
 */
const faker = require('http-request-mock/plugin/faker');
module.exports = function() {
  return {
    id: faker.incrementId(),
    name: faker.name(),
    age: 10 + faker.rand(0, 90),
    phone: faker.phone('(###) ###-####'),
    gender: faker.gender(),
    avatar: faker.avatar(),
  };
};
