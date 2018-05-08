const Api = require('.').default
const sinon = require('sinon')

describe('Api', () => {
  test('can be initialised with a "fetch" function', () => {
    const response = {bar: 42}
    const fetchFunction = sinon.fake((params) => Promise.resolve(response))
    const api = new Api({
      baseUrl: 'foo',
      fetchFunction,
    })
    expect(api.inProgress).toBe(false)
    const prom = api.get('/1', {p1: "baz"})
    expect(api.inProgress).toBe(true)
    prom.then(res => {
      expect(api.inProgress).toBe(false)
      expect(res).toBe(response)
    })
    expect(fetchFunction.callCount).toBe(1)
    expect(fetchFunction.getCall(0).lastArg).toBe('foo/1?p1=baz')
  })
})
