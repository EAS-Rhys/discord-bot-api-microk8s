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
  default: (cmd) => {
    return new Promise((resolve, reject) => {

    console.log("create");
    })
  }
}

