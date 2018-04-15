const getMentions = require('../getMentions')

describe('finds github usernames mentioned', () => {
  it('returns 2 usernames', () => {
    const metions = getMentions('@dogs and @cats are very cute')
    expect(metions).toEqual(['dogs', 'cats'])
  })

  it('returns no username', () => {
    const metions = getMentions('dogs and cats rule the internet')
    expect(metions).toEqual([])
  })
})
