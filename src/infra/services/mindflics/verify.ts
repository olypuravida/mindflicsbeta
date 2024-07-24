'use server'

import axios from 'axios'

import { MINDFLICS_USER_API } from '@/domain/constants/env'


export const verifyEmail = async (verifyToken: string) => {
  const url =  `${MINDFLICS_USER_API}api/auth/verify/email`
  const { data } = await axios.post<any>(url,  null, { headers: {
    'Content-Type' : 'application/json',
    'Authorization':  `Bearer ${verifyToken}`,           
  }  })
  return data
}
