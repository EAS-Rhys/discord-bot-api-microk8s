const Promise = require('promise');
const vcenter = require("../utils/vcenter");

module.exports = {
  name: "power_off",
  default: (req,cmd) => {
    return new Promise((resolve, reject) => {
      if(req.get('user') != 'rhysmorgan1986'){
        resolve({ status: "success", status_message: "non_authorised_user", discord_message: "Nice try... You have no power here " + req.get('user'), lock: false})
      }
      powerOffVM().then(result => {
        resolve({ status: "success", status_message: "vm_powered_off", discord_message: "Virtual machine: " + cmd[2] + " powered off successfully", lock: false})
      }).catch(err=>{
        reject({ status: "error", status_message: "vm_power_off_failed", discord_message: err})
      })
    })
  }
}

const powerOffVM = () => {
  return new Promise((resolve, reject) => {
    vcenter.login().then(sessionid => {
      vcenter.vcRequest({ session_id: sessionid, route: "vcenter/vm", verb: "GET" }).then(result=>{
        resolve(result)
      }).catch(err=>{
        reject(err)
      })
    }).catch(err=>{
      reject(err)
    })
  })
}


