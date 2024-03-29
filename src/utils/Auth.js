class Auth {
  constructor(options) {
    this._baseUrl = options.BASE_URL;
    this._headers = options.headers;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return res.json().then(res => Promise.reject(res));
    }
    return res.json();
  }

  _request(url, options) {
    return fetch(url, options).then(this._getResponseData);
  }

  register = (email, password, name) => {
    return this._request(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({ email, password, name }),
    });
  };

  authorize = (email, password) => {
    return this._request(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({ email, password }),
    }).then((res) => {
      if (res.token) {
        console.log(res.token)
        localStorage.setItem("jwt", res.token);
      }
      return res;
    });
  };

  checkToken = (jwt) => {
    return this._request(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json',
        authorization: `Bearer ${jwt}`,
      },
      credentials: "include",
    });
  };
}

const auth = new Auth({
  BASE_URL: "https://api.diploma.raznex.nomoredomains.rocks",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
});

export default auth;
