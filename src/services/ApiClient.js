const API_TEST_URL = 'https://jsonplaceholder.typicode.com/';
import axios from 'axios';

const BaseApiInstance = axios.create({
  baseURL: API_TEST_URL,
});

class ApiClient {
  static async get(url, config) {
    return await BaseApiInstance.get(url, config);
  }
  static async post(url, data, config) {
    return await BaseApiInstance.post(url, data, config);
  }
  static async put(url, data, config) {
    return await BaseApiInstance.put(url, data, config);
  }
  static async patch(url, data, config) {
    return await BaseApiInstance.patch(url, data, config);
  }
  static async delete(url, config) {
    return await BaseApiInstance.delete(url, config);
  }
}

export default ApiClient;
