import axios from 'axios';

import {AuthCustomer, Reauthorization} from './Api';
import {BASE_URL} from '@env';
//'http://myci-adm.test.ol.ge/mci-back/resources/front/auth'

export const AuthorizeCustomer = data => {
  return axios.post(BASE_URL + AuthCustomer, data);
};

export const ReauthorizeCustomer = tokens => {
  return axios.post(BASE_URL + Reauthorization, tokens);
};
