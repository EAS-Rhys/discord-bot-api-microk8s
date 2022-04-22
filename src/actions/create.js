var base = {
  "guest_customization_spec": {
      "name": ""
  },
  "name": "",
  "placement": {
      "cluster": "Cardiff",
  },
  "power_on": true,
  "source": "vm-28"
}

module.exports = {
  name: "create",
  default: (req,cmd) => {
    return new Promise((resolve, reject) => {

      resolve({status: "success", status_message: "action_pending", discord_message: "\n Create it yourself you lazy bastard"})

    })
  }
}

