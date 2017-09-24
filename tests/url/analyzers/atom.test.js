const test = require('ava')
const analyzeAtom = require('../../../lib/url/analyzers/atom')

test('should not update token if already analyzed', async t => {
  const token = {
    analyzed: true
  }
  const save = Object.assign({}, token)

  const ret = await analyzeAtom(token)

  t.is(ret, false)
  t.deepEqual(token, save)
})
