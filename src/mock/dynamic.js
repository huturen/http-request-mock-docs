/**
 * @url https://www.api.com/dynamic-response
 * @method get
 */
let times = 0;
module.exports = (requestInfo) => {
  const { url, query } = requestInfo;
  return { times: 'times: ' + (++times), url, query };
};
