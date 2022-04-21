const Promise = require('promise');
const fs = require("fs");
const path = require("path");

exports.func = req => {
  return new Promise((resolve, reject) => {

    // Validate :command parameter has data
    if (req.params.command.length < 1) {
      reject({ status: "error", status_message: "invalid command structure" })
    }
console.log("hit")
    // Convert comma delimited command structure to an array
    let params = req.params.command.split(",");
    let req_identifier
    let req_action
    // Validate command array has minimum number of elements (2)
    try {
      req_identifier = params[0];
      req_action = params[1];
    } catch (err) {
      reject({ status: "error", status_message: "insufficient_parameters" })
    }


    console.log("hit")

    // Import all actions.
    var actions = {}

    fs.readdirSync(path.join("__dirname", "../actions"))
      .filter(file => {
        return (file.indexOf(".") !== 0);
      })
      .forEach(file => {
        var action = require(path.join(__dirname, "../actions", file));
        actions[action.name] = action;
      });

    console.log(actions);

    try {
      actions[req_action].default(params).then(result => {
        resolve(result);
      })
    } catch (err) {
      console.log(req_action, " FAILED", err)
      reject({ status: "error", status_message: "error_invoking_action" })
    }


  })
}

