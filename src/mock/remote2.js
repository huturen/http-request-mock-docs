/**
 * @url https://www.api.com/remote2
 *
 * In browser, the specified remote url must conform to the cross-domain specification.
 * @remote https://jsonplaceholder.typicode.com/todos/1
 *
 * You can set request headers for the specified remote request
 * Note: For browser, target server must confirm to Access-Control-Allow-Headers specification
 * @remoteRequestHeaders abc: xyz
 *
 * @method get
 */
module.exports = remote => {
  return {
    code: 0,
    msg: 'OK',
    data: remote.responseJson
  }
}
