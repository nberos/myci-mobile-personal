import ApiClient from './ApiClient';

import Api from './Api';

class NetworkManager {
  // static async AuthorizeCustomer(username, password) {
  //   return await ApiClient.post(Api.AuthorizeCustomer, {
  //     username: username,
  //     password: password,
  //   });
  // }

  static async getUsers(url) {
    return await ApiClient.get(url);
  }
}

export default NetworkManager;
