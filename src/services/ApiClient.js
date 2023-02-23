const API_TEST_URL = 'https://jsonplaceholder.typicode.com/';

class ApiClient {
  static async get(url) {
    return await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // mode: 'cors'
      cache: 'default',
    });
  }
  static async post(url, data) {
    return await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer <token>',
      },
      body: JSON.stringify(data),
      mode: 'cors',
      cache: 'default',
    });
  }
  static async put(url, data) {
    return await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      mode: 'cors',
      cache: 'default',
    });
  }
  static async patch(url, data) {
    return await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      mode: 'cors',
      cache: 'default',
    });
  }
  static async delete(url) {
    return await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      cache: 'default',
    });
  }
}

export default ApiClient;
