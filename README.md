# probot-on-mention

> A Probot extension to trigger events when someone mentions a given username.

Example - 

```js
const onMention = require('probot-on-mention');

module.exports = (robot) => {
  onMention(robot, { username: 'itaditya' });
  robot.on('user.mentioned', async context => {
    // OMG itaditya is mentioned, do something about it !!
  })
}
```
