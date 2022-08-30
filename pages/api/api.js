// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios"

export const CheckRegistrationAPI = (contact) => {
  return axios.post("http://43.204.87.153/api/v1/users/check_registration", {
    mobile: contact,
  })
}
export const SendRegistrationOtpAPI = (contact) => {
  return axios.post("http://43.204.87.153/api/v1/users/send_registration_otp", {
    mobile: contact
  })
}
export const RegisterUserAPI = (contact, otp) => {
  return axios.post("http://43.204.87.153/api/v1/users/register", {
    mobile: contact,
    mobile_otp: otp
  })
}
export const SendLoginOtpAPI = (contact) => {
  return axios.post("http://43.204.87.153/api/v1/users/send_login_otp", {
    mobile: contact
  })
}
export const FinalLoginAPI = (contact, otp) => {
  return axios.post("http://43.204.87.153/api/v1/users/login", {
    mobile: contact,
    mobile_otp: otp
  })
}