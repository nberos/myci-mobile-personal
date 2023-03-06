import axios from 'axios';

import {
  AcceptPromotionalOfferAgreementEnd,
  AcceptUserAgreementEnd,
  AuthCustomerEnd,
  ChangePasswordEnd,
  CheckOTPEnd,
  CheckRegistrationOtpEnd,
  CustomerExtraEnd,
  FilledInfoEnd,
  GetCountriesEnd,
  GetOPTDurationEnd,
  GetPromotionalOfferAgreementEnd,
  GetUserAgreementEnd,
  ReauthorizationEnd,
  RegisterCustomerEnd,
  SendOTPEnd,
  SendRegistrationOtpEnd,
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

export const GetPromotionalOfferAgreement = () => {
  return axios.get(BASE_URL + GetPromotionalOfferAgreementEnd);
};

export const AcceptPromotionalOfferAgreement = () => {
  return axios.patch(BASE_URL + AcceptPromotionalOfferAgreementEnd);
};

export const RegisterCustomer = data => {
  return axios.post(BASE_URL + RegisterCustomerEnd, data);
};

export const GetUserAgreement = () => {
  return axios.get(BASE_URL + GetUserAgreementEnd);
};

export const AcceptUserAgreement = () => {
  return axios.patch(BASE_URL + AcceptUserAgreementEnd);
};

export const SendRegistrationOtp = (phone, email) => {
  return axios.put(BASE_URL + SendRegistrationOtpEnd);
};

export const CheckRegistrationOtp = code => {
  return axios.put(BASE_URL + CheckRegistrationOtpEnd, {code: code});
};

export const CustomerExtra = (address, birthDate, email, countryId) => {
  return axios.put(BASE_URL + CustomerExtraEnd, {
    address: address,
    birthDate: birthDate,
    email: email,
    countryId: countryId,
  });
};

export const FilledInfo = (lang, step) => {
  return axios.get(BASE_URL + FilledInfoEnd);
};

export const GetCountries = lang => {
  return axios.get(BASE_URL + GetCountriesEnd);
};
