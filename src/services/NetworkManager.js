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

export const ChangePassword = password => {
  return axios.patch(BASE_URL + ChangePasswordEnd, {password: password});
};

export const GetOPTDuration = () => {
  return axios.get(BASE_URL + GetOPTDurationEnd);
};

export const CheckOTP = username => {
  return axios.post(BASE_URL + CheckOTPEnd, {username: username});
};
