/**
 * @url https://api.com/xyz
 * @method get
 * @header content-type: application/json
 * @header abc: xyz
 * @status 200
 * @delay 300
 */
module.exports = (req) => {
  return { msg: 'some mock data', query: req.query };
}
