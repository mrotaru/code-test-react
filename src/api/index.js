const objectToQueryString = (obj) =>
  Object.keys(obj)
    .map(k => `${k}=${encodeURIComponent(obj[k])}`).join('&')

class Api {
  constructor ({ baseUrl, fetchFunction }) {
    this.inProgress = false
    this.fetchFunction = fetchFunction
    this.baseUrl = baseUrl
    this.request = null
    return this
  }
  get (url, params) {
    if (this.inProgress) {
      return Promise.reject('Cannot have parallel requests')
    }
    this.inProgress = true
    const qs = params ? `?${objectToQueryString(params)}` : ''
    this.request = this.fetchFunction(`${this.baseUrl}${url}${qs}`)
      .then(result => {
        this.inProgress = false
        return result
      }).catch(error => {
        this.inProgress = false
        console.log('ce', error)
        return Promise.reject(error)
      })
    return this.request
  }
}

export default Api