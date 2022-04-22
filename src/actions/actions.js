const spec = require('../spec.js');
const Promise = require('promise');


module.exports = {
  name: "actions",
  default: (req,cmd) => {
    return new Promise((resolve, reject) => {
      resolve({status: "success", status_message: "action_list", discord_message: "\n **Available Actions** \n\n**" + spec.actions.join("**\n**") + "**"})
    })
    }
}

