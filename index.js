module.exports = (robot) => {
  robot.on('issue_comment.created', context => {
    const re = /@[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}/gi
    const mentions = context.payload.comment.body.match(re)
    const event = {
      event: 'mention',
      payload: {
        ...context.payload,
        mentioned: ''
      }
    }
    mentions.forEach(mention => {
      event.payload.mentioned = mention.substr(1)
      robot.receive(event)
    })
  })
}
