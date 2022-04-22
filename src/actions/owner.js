const spec = require('../spec.js');
const Promise = require('promise');


module.exports = {
  name: "owner",
  default: (req,cmd) => {
    return new Promise((resolve, reject) => {
      resolve({status: "success", status_message: "owner", discord_message: "\n\n **API Owner:** \n\n:man_beard: The Man, \n:unicorn: The Myth, \n:mechanical_leg: The Legend. \n\n **Rhys Morgan** \n\n Who is far superior to: " + req.get('user') })
    })
    }
}

