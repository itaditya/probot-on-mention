const getMentions = require('./getMentions');

module.exports = (robot) => {
  robot.on('issue_comment.created', context => {
    const commentBody = context.payload.comment.body
    const mentions = getMentions(commentBody)
    const event = {
      event: 'mention',
      payload: {
        ...context.payload,
        mentioned: ''
      }
    }
    mentions.forEach(mention => {
      event.payload.mentioned = mention
      robot.receive(event)
    })
  })
}
