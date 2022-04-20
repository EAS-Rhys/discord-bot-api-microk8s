# Discord Bot API for Managing Microk8s Instances

## Usage 

Development environment can be created using:
```
docker stack deploy -c dev-stack.yml discord-api-microk8s
```

Once running api listings can be found at http://localhost:8080/api-docs

## Implemented interfaces

##### /api/validate/:command

This GET api accepts a comma separated list of values in the command param and uses the validate route to check validity of:

- action identifier
- action
- action parameters

It uses values derived from spec.json to perform the validation making the function re-usable.

Example error response format:

```
{ 
  status: "error", 
  status_message: "invalid_action", 
  discord_message: req_action + " isn't a valid action. \n Valid actions are: \n " + spec.actions.join("\n") 
}
```

Example success response format:

```
{ 
  status: "success", 
  status_message: "valid_command"
}
```

status == error/success

status_message == succinct error message, no spaces underscore delimited

discord_message == text or data to be sent back to discord via the bot

