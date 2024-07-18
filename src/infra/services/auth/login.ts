/* eslint-disable react-hooks/rules-of-hooks */
'use server'

import axios from 'axios'
import { MINDFLICS_USER_API } from '@/domain/constants/env'

export interface AuthLoginProps {
  username: string
  password: string
}

export interface AuthLoginResponse {
  content: {
    message: string
    user: {
      id: number
      accessToken: string
      email: string
      roles: string[]
      username: string
    }
  }
  status: {
    code: number
    reason: string
    success: boolean
  }
}

export const authLogin = async (auth: AuthLoginProps) => {

  const username = auth.username
  const password = auth.password

  const userFinal = btoa(`${username}:${password}`)
  
  const url = `${MINDFLICS_USER_API}api/auth/login`

  console.log(url)

  const { data } = await axios.post<any>(url, null, { headers: {
    'Authorization':  `Basic ${userFinal}`,
    'Content-Type' :  'application/json'
  } })
  return data
}

/*
export const verifyToken = async(token: String) => {

  const url = '/api/auth/verify/token'
  const { data } = await axios.post<AuthLoginResponse>(url, null, { headers: {
    'Authorization':  'Bearer $token'
  } })
  return data
}
*/
