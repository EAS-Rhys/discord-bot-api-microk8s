const Promise = require('promise');
const vcenter = require("../utils/vcenter");

module.exports = {
  name: "list",
  default: (cmd) => {
    return new Promise((resolve, reject) => {
      console.log("Executing list");
      listVM().then(result => {
        var discord_response = "";
        result.map(vm=>{
          discord_response += vm.name + ": " + "CPU: " + vm.cpu_count + ", Memory: " + vm.memory_size_MiB + ", State: " + vm.power_state + "\n"
        })
        resolve({ status: "success", status_message: "vm_list_retrieved", discord_message: discord_response, lock: false})
      }).catch(err=>{
        reject({ status: "error", status_message: "vm_list_retrieval_failed"})
      })
    })
  }
}

const listVM = () => {
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


