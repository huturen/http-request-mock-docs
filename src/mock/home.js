/**
 * @url https://api.com/xyz
 * @method get
 * @header content-type: application/json
 * @header abc: xyz
 * @status 200
 * @delay 300
 */
const faker = require('http-request-mock/plugin/faker.js');
module.exports = (req) => {
  return {
    url: req.url,
    id: faker.incrementId(),
    enName: faker.name(),
    cnName: faker.name(true),
    age: faker.rand(10, 40),
    phone: faker.phone('(###) ###-####'),
   };
}
