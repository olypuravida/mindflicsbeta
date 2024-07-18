/* eslint-disable react-hooks/rules-of-hooks */
//import axios from 'axios'

export interface AuthLogoutProps {
  accessToken: string
}

export interface AuthLogoutResponse {
  content: {
    message: string
  }
  status: {
    code: number
    reason: string
    success: boolean
  }
}

/*
export const authLogout = async ({ accessToken }: AuthLogoutProps) => {
  const url = '/api/auth/logout'
  const { data } = await axios.delete<AuthLogoutResponse>(url, {
    headers: { Authorization: `Bearer ${accessToken}`,
  } })
  return data
}
*/

export const authLogout = async ({ accessToken }: AuthLogoutProps) => {
  console.log(accessToken)
  const temporalResponse = {
    content: {
      message: 'Succesfully logged out',
    },
    status: {
      code: 200,
      reason: 'OK',
      success: true,
    }
  }
  return temporalResponse
}