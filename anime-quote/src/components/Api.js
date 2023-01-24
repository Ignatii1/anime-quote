class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl
    this._headers = options.headers
  }

  _request(url) {
    return fetch(url).then(this._checkRes)
  }

  _checkRes(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
  }

  getByTitle(titleName) {
    return this._request(`${this._baseUrl}/random/anime?title=${titleName}`)
  }

  getByCharacter(characterName) {
    return this._request(
      `${this._baseUrl}/random/character?name=${characterName}`
    )
  }
}
const api = new Api({
  baseUrl: 'https://animechan.vercel.app/api',
})
export default api
