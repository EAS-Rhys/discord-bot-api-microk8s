/**
 * @openapi
 * /api/healthz:
 *  get:
 *    description: Healthz endpoint
 *    produces:
 *     - application/json
 *    responses:
 *       200:
 *         description: Returns JSON status and 200 status code
 */

module.exports = function (app) {
  app.get('/api/healthz', (req, res, next) => {
    res.send({"status":"success"})
  })
}
