// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
import { API_URL } from "utils/data";

export const CheckRegistrationAPI = async (contact) => {
  try {
    return await axios.post(`${API_URL}api/v1/users/check_registration`, {
      mobile: contact,
    });
  } catch (e) {
    console.log(e)
  }
};
export const SendRegistrationOtpAPI = async (contact) => {
  try {
    return await axios.post(`${API_URL}api/v1/users/send_registration_otp`, {
      mobile: contact,
    });
  } catch (e) {
    console.log(e)
  }
};
export const RegisterUserAPI = async (contact, otp) => {
  try {
    return await axios.post(`${API_URL}api/v1/users/register`, {
      mobile: contact,
      mobile_otp: otp,
    });
  } catch (e) {
    console.log(e)
  }
};
export const SendLoginOtpAPI = async (contact) => {
  try {
    return await axios.post(`${API_URL}api/v1/users/send_login_otp`, {
      mobile: contact,
    });
  } catch (e) {
    console.log(e)
  }
};
export const FinalLoginAPI = async (contact, otp) => {
  try {
    return await axios.post(`${API_URL}api/v1/users/login`, {
      mobile: contact,
      mobile_otp: otp,
    });
  } catch (e) {
    console.log(e)
  }
};

//  Home page
export const CityDetactionAPI = async () => {
  try {
    return await axios.get(`${API_URL}api/v1/cities`);
  } catch (e) {
    console.log(e)
  }
};

// mix
export const TimeSloatAPI = async () => {
  try {
    return await axios.get(`${API_URL}api/v1/timeslots`);
  } catch (e) {
    console.log(e)
  }
};
export const PincodeByCity = async (cityid) => {
  try {
    return await axios.get(`${API_URL}api/v1/pincodes_by_city`, {
      params: {
        city: cityid,
      },
    });
  } catch (e) {
    console.log(e)
  }
};
export const AddressTypes = async () => {
  try {
    return await axios.get(`${API_URL}api/v1/address_types`);
  } catch (e) {
    console.log(e)
  }
};

// logout
export const UserLogout = async (token) => {
  try {
    return await axios.get(`${API_URL}api/v1/users/logout`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (e) {
    console.log(e)
  }
};
//
export const CouponsByCC = async (city = 1, category = 1) => {
  try {
    return await axios.get(`${API_URL}api/v1/cms/coupons_by_cc`, {
      params: {
        city: city,
        category: category,
      },
    });
  } catch (e) {
    console.log(e)
  }
};
// addresssave

export const MyAddress = async (token) => {
  try {
    return await axios.get(`${API_URL}api/v1/users/my_addresses`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (e) {
    console.log(e)
  }
};
export const SaveAddress = async (token, type, no, add1, add2, landmark, pincode) => {
  try {
    return await axios.post(
      `${API_URL}api/v1/users/my_addresses`,
      {
        addressType: type,
        addressNo: no,
        addressOne: add1,
        addressTwo: add2,
        landmark: landmark,
        pincode: pincode,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  } catch (e) {
    console.log(e)
  }
};
// cart
export const MyCart = async (token, city) => {
  try {
    return await axios.get(
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
  } catch (e) {
    console.log(e)
  }
};
export const AddToCart = async (token, issueId) => {
  try {
    return await axios.post(
      `${API_URL}api/v1/users/my_cart`,
      { issueId: issueId },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  } catch (e) {
    console.log(e)
  }
};
