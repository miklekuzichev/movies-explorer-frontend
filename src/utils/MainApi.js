class MainApi {
    constructor (config) {
      this._url = config.BASE_URL;
      this._headers = config.headers;
    }
  
    register(data) {
      return fetch(`${this._url}/signup`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify(data),
      }).then(this._handleOriginalResponse);
    };
  
    authorize(data) {
      return fetch(`${this._url}/signin`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify(data)
      }).then(this._handleOriginalResponse);
    };
  
    checkToken(token) {
      return fetch(`${this._url}/users/me`, {
        method: 'GET',
        headers: {
          ...this.headers,
          Authorization: `Bearer ${token}`,
        },
      }).then(this._handleOriginalResponse);
    };
  
    _handleOriginalResponse(res) {
      if (!res.ok) {
        return Promise.reject(res.status);
      }
      return Promise.resolve(res.json())
        .then((data) => {
          return { data, status: res.status }
        })
    };

    updateCurrentUserProfile(data, token) {
      return fetch(`${this._url}/users/me`, {
        method: 'PATCH',
        headers: {
          ...this._headers,
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email
        })
      }).then(this._handleOriginalResponse)
    };
  
    getSavedMovies(token) {
      return fetch(`${this._url}/movies`, {
        method: 'GET',
        headers: {
          ...this._headers,
          Authorization: `Bearer ${token}`
        },
      }).then(this._handleOriginalResponse)
    };

    saveMovie(data, token) {
      return fetch(`${this._url}/movies`, {
        method: 'POST',
        headers: {
          ...this._headers,
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data),
      }).then(this._handleOriginalResponse)
    };
  
    deleteSavedMovie(id, token) {
      return fetch(`${this._url}/movies/${id}`, {
        method: 'DELETE',
        headers: {
          ...this._headers,
          Authorization: `Bearer ${token}`
        },
      }).then(this._handleOriginalResponse)
    };
  };
  
  const TUNING = {
    BASE_URL: 'https://api.miklekuzichev.movies.nomoredomainsmonster.ru',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  
  const mainApi = new MainApi(TUNING);
  
  export default mainApi;
  