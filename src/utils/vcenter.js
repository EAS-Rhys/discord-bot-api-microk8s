const Promise = require('promise');
const request = require('request');

const vc = {
  "host": "https://vcenter.easlab.co.uk",
  "user": "administrator@easlab.co.uk",
  "pass": "Renegade187!"
};

const login = () => {
  return new Promise((resolve, reject) => {

    request({
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Basic ' + Buffer.from(vc.user + ':' + vc.pass).toString('base64')
      },
      uri: vc.host + '/api/session',
      method: 'POST',
      rejectUnauthorized: false,
    }, (err, res, resbody) => {
      if (err) {
        console.log(err)
        reject(err)
      } else {
        resolve(resbody.replaceAll('"',''));
      }
    })
  })
}

const vcRequest = opts => {
  return new Promise((resolve, reject) => {
console.log(opts.session_id)
    request({
      headers: {
        'Accept': 'application/json',
        'vmware-api-session-id': opts.session_id
      },
      uri: vc.host + '/api/' + opts.route,
      method: opts.verb,
      body: opts.body,
      rejectUnauthorized: false
    }, (err, res, resbody) => {
      if (err) {
        console.log(err)
        reject(err)
      } else {
        resolve(JSON.parse(resbody));
      }
    })
  })
}

module.exports = { vcRequest, login };