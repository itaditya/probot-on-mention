# probot-on-mention

> A Probot extension to trigger events when someone mentions a given username.

Example - 

```js
const onMention = require('probot-on-mention')

module.exports = (robot) => {
  onMention(robot)
  robot.on('mention', async context => {
    const username = context.payload.mentioned
    console.log(`${username} was mentioned!`)
  })
}
```

Install it with `npm i probot-on-mention`.
