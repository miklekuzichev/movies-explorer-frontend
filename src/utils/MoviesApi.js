class MoviesApi {
    constructor (config) {
      this._url = config.BASE_URL;
      this._headers = config.headers;
    }
  
    _handleOriginalResponse(res) {
      if (!res.ok) {
        return Promise.reject(res.status);
      }
      return Promise.resolve(res.json())
        .then((data) => {
          return { data, status: res.status }
        })
    };
  
    getMoviesData() {
      return fetch(`${this._url}`, {
        headers: this._headers,
      }).then(this._handleOriginalResponse);
    };
  };
  
  const TUNING = {
    BASE_URL: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  
  const moviesApi = new MoviesApi(TUNING);
  
  export default moviesApi;
  