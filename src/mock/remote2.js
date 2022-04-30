/**
 * @url https://www.api.com/remote2
 *
 * In browser, the specified remote url must conform to the cross-domain specification.
 * @remote https://jsonplaceholder.typicode.com/todos/1
 * @method get
 */
module.exports = remote => {
  return {
    code: 0,
    msg: 'OK',
    data: remote.responseJson
  }
}
