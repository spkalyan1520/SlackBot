# SlackBot

A simple way to create slack bots for a conversational user experience. 
This is a wrapper around the slackbots package geared mainly towards channels

# Installation

```
npm install slack-ux
```

### Methods
- `getChannels()` (return: promise) - returns a list of all channels in the team,
- `getChannels()` (return: promise) - returns a list of all channels in the team,
- `getChannels()` (return: promise) - returns a list of all channels in the team,
- `getChannels()` (return: promise) - returns a list of all channels in the team,
- `getChannels()` (return: promise) - returns a list of all channels in the team,
- `getChannels()` (return: promise) - returns a list of all channels in the team,
- `getChannels()` (return: promise) - returns a list of all channels in the team,
- `getChannels()` (return: promise) - returns a list of all channels in the team,

- `getChannels()` (return: promise) - returns a list of all channels in the team,
- `getGroups()` (return: promise) - returns a list of all groups in the team,
- `getUsers()` (return: promise) - returns a list of all users in the team,
- `getImChannels()` (return: promise) - returns a list of bots direct message channels in the team,
- `getChannel(name)` (return: promise) - gets channel by name,
- `getGroup(name)` (return: promise) - gets group by name,
- `getUser(name)` (return: promise) - gets user by name,
- `getUserByEmail(name)` (return: promise) - gets user by name,
- `getChannelId(name)` (return: promise) - gets channel ID by name,
- `getGroupId(name)` (return: promise) - gets group ID by name,
- `getUserId(name)` (return: promise) - gets user ID by name,
- `getChatId(name)` (return: promise) - it returns or opens and returns a direct message channel ID,
- `postEphemeral(id, user, text, params)` (return: promise) - posts an ephemeral message to channel and user by ID,
- `postMessage(id, text, params)` (return: promise) - posts a message to channel | group | user by ID,
- `updateMessage(channelId, timestamp, text, params)` (return: promise) - updates a message in a channel,
- `postTo(name, message [, params, callback])` (return: promise) - posts a message to channel | group | user by name,
- `postMessageToUser(name, message [, params, callback])` (return: promise) - posts a direct message by user name,
- `postMessageToGroup(name, message [, params, callback])` (return: promise) - posts a message to private group by name,
- `postMessageToChannel(name, message [, params, callback])` (return: promise) - posts a message to channel by name.
- `openIm(userId)` (return: promise) - opens a direct message channel with another member in the team


npm start
