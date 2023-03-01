import axios from 'axios';

import {
  AuthCustomerEnd,
  ChangePasswordEnd,
  CheckOTPEnd,
  GetOPTDurationEnd,
  ReauthorizationEnd,
  SendOTPEnd,
} from './Api';
import {BASE_URL} from '@env';

export const AuthorizeCustomer = data => {
  return axios.post(BASE_URL + AuthCustomerEnd, data);
};

export const ReauthorizeCustomer = tokens => {
  return axios.post(BASE_URL + ReauthorizationEnd, tokens);
};

export const SendOTP = username => {
  return axios.post(BASE_URL + SendOTPEnd, {username: username});
};

export const ChangePassword = (username, password) => {
  return axios.patch(BASE_URL + ChangePasswordEnd, {
    username: username,
    password: password,
  });
};

export const GetOTPDuration = () => {
  return axios.get(BASE_URL + GetOPTDurationEnd);
};

export const CheckOTP = (username, code) => {
  return axios.post(BASE_URL + CheckOTPEnd, {username: username, code: code});
};
