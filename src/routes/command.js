/**
 * @openapi
 * /api/command/{command}:
 *  get:
 *    description: Execute a command against this API
 *    produces:
 *     - application/json
 *    parameters:
 *     - name: command
 *       in: path
 *       required: true
 *       type: string    
 *    responses:
 *       200:
 *         description: Returns appropriate JSON response based on action performed
 */

var function_module = require('../route_functions/command.js')
module.exports = function (app) {
  app.get('/api/command/:command', (req, res, next) => {

    var getResponse = function_module.func(req)
    getResponse.then((response) => {
      res.send(response)
    }).catch(err => {
      res.send(err)
    })

  })
}
