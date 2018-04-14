module.exports = (robot, data) => {
  const { username } = data;
  robot.on('issue_comment.created', context => {
    if (context.payload.comment.user.type === 'Bot') {
      return
    }
    const re = /@[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}/gi
    const mentions = context.payload.comment.body.match(re)
    const isMentioned = mentions.includes('@' + username);
    if(!isMentioned) {
      return;
    }
    const event = {
      event: 'user',
      payload: {
        ...context.payload,
        action: 'mentioned'
      }
    }
    robot.receive(event);
  })
}
