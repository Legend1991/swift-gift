import config from '../config';

class Api {
  _request(method, path, body) {
    const headers = {
      'Content-Type': 'application/json',
      'Accept':       'application/json'
    };

    const options = {method, headers};

    if (body) {
      options.body = JSON.stringify(body);
    }

    const url = `${config.endpoint}/${path}`;

    return fetch(url, options).then(this._json);
  }

  _json(res) {
    if (res.status === 200) {
      return res.json();
    } else {
      const error = new Error(res.statusText);
      error.response = res;
      throw error;
    }
  }

  _get(url) {
    return this._request('GET', url);
  }

  _post(url, body) {
    return this._request('POST', url, body);
  }

  _put(url, body) {
    return this._request('PUT', url, body);
  }

  async getCategories() {
    return await this._get('categories');
  }
}

export default new Api();