module.exports = (text) => {
  const re = /@[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}/gi
  const mentions = text.match(re) || []
  return mentions.map(mention => mention.substr(1))
}
