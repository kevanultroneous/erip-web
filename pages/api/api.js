// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
import { API_URL } from "utils/data";

export const CheckRegistrationAPI = (contact) => {
  return axios.post(`${API_URL}api/v1/users/check_registration`, {
    mobile: contact,
  });
};
export const SendRegistrationOtpAPI = (contact) => {
  return axios.post(`${API_URL}api/v1/users/send_registration_otp`, {
    mobile: contact,
  });
};
export const RegisterUserAPI = (contact, otp) => {
  return axios.post(`${API_URL}api/v1/users/register`, {
    mobile: contact,
    mobile_otp: otp,
  });
};
export const SendLoginOtpAPI = (contact) => {
  return axios.post(`${API_URL}api/v1/users/send_login_otp`, {
    mobile: contact,
  });
};
export const FinalLoginAPI = (contact, otp) => {
  return axios.post(`${API_URL}api/v1/users/login`, {
    mobile: contact,
    mobile_otp: otp,
  });
};

//  Home page
export const CityDetactionAPI = () => {
  return axios.get(`${API_URL}api/v1/cities`);
};

// mix
export const TimeSloatAPI = () => {
  return axios.get(`http://43.204.87.153/api/v1/timeslots`);
};
export const PincodeByCity = (cityid) => {
  return axios.get(`${API_URL}api/v1/pincodes_by_city`, {
    params: {
      city: cityid,
    },
  });
};
export const AddressTypes = () => {
  return axios.get(`${API_URL}api/v1/address_types`);
};

// logout
export const UserLogout = (token) => {
  return axios.get(`${API_URL}api/v1/users/logout`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
//
export const CouponsByCC = (city = 1, category = 1) => {
  return axios.get(`${API_URL}api/v1/cms/coupons_by_cc`, {
    params: {
      city: city,
      category: category,
    },
  });
};
// addresssave

export const MyAddress = (token) => {
  return axios.get(`${API_URL}api/v1/users/my_addresses`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
export const SaveAddress = (token, type, no, add1, add2, landmark, pincode) => {
  return axios.post(
    `${API_URL}api/v1/users/my_addresses`,
    {
      addressType: "H",
      addressNo: "9039-jdu",
      addressOne: "kdksj jsdhhjdhhsjdf",
      addressTwo: "dsdsfdsdsd",
      landmark: "ssksdj sdnjk",
      pincode: "001",
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};
// cart
export const MyCart = (token, city) => {
  return axios.get(
    `${API_URL}api/v1/users/my_cart`,
    {
      headers: { Authorization: `Bearer ${token}` },
    },
    {
      params: {
        city: city,
      },
    }
  );
};
export const AddToCart = (token, issueId) => {
  return axios.post(
    `${API_URL}api/v1/users/my_cart`,
    { issueId: issueId },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};
export const MyProfile = (token) => {
  return axios.get(`${API_URL}api/v1/users/my_profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
