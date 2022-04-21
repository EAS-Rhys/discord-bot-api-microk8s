const spec = require('../spec.js');
const Promise = require('promise');


module.exports = {
  name: "actions",
  default: (cmd) => {
    return new Promise((resolve, reject) => {
      resolve({status: "success", status_message: "action_list", discord_message: spec.actions.join(" \n")})
    })
    }
}

