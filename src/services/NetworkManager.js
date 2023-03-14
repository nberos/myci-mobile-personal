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
  LandingFAQCategoriesEnd,
  LandingFAQEnd,
  LandingProductsEnd,
  ReauthorizationEnd,
  RegisterCustomerEnd,
  SendOTPEnd,
  SendRegistrationOtpEnd,
} from './Api';

import {BASE_URL} from '@env';

// login
export const AuthorizeCustomer = (data, access_token) => {
  if (access_token) {
    return axios.post(BASE_URL + AuthCustomerEnd, data, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  } else {
    return axios.post(BASE_URL + AuthCustomerEnd, data);
  }
};

export const ReauthorizeCustomer = tokens => {
  return axios.post(BASE_URL + ReauthorizationEnd, tokens);
};

// otp
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

// registration
export const GetPromotionalOfferAgreement = () => {
  return axios.get(BASE_URL + GetPromotionalOfferAgreementEnd);
};

export const AcceptPromotionalOfferAgreement = () => {
  return axios.patch(BASE_URL + AcceptPromotionalOfferAgreementEnd);
};

export const RegisterCustomer = data => {
  return axios.post(BASE_URL + RegisterCustomerEnd, data);
};

export const GetUserAgreement = access_token => {
  return axios.get(BASE_URL + GetUserAgreementEnd, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const AcceptUserAgreement = access_token => {
  return axios.patch(
    'http://myci-adm.test.ol.ge/mci-back/resources/front/customer/agreement',
    {},
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    },
  );
};

export const SendRegistrationOtp = (method, data, access_token) => {
  console.log(BASE_URL + SendRegistrationOtpEnd + `?${method}=${data}`);
  return axios.put(
    BASE_URL + SendRegistrationOtpEnd + `?${method}=${data}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    },
  );
};

export const CheckRegistrationOtp = (code, access_token) => {
  return axios.put(
    BASE_URL + CheckRegistrationOtpEnd,
    {code: code},
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    },
  );
};

export const CustomerExtra = (data, access_token) => {
  console.log(data, access_token);
  return axios.put(BASE_URL + CustomerExtraEnd, data, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const FilledInfo = (lang, step) => {
  return axios.get(BASE_URL + FilledInfoEnd);
};

export const GetCountries = access_token => {
  return axios.get(BASE_URL + GetCountriesEnd, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

// landing page [drawer]
export const LandingProducts = (type, language) => {
  return axios.get(
    BASE_URL + LandingProductsEnd + `?type=${type}&language=${language}`,
  );
};

export const LandingFAQ = language => {
  return axios.get(
    BASE_URL + LandingFAQCategoriesEnd + `?language=${language}`,
  );
};

export const LandingFAQCategories = (language, categoryId) => {
  return axios.get(
    BASE_URL + LandingFAQEnd + `?language=${language}&categoryId=${categoryId}`,
  );
};
