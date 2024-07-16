'use server'

import axios from 'axios'

import type { CounsellorAttributes } from '@/domain/db/mindflics/Counsellor'
import { MINDFLICS_USER_API } from '@/domain/constants/env'

interface Response {
  content: {
    message: string
    data: any
  }
  status: {
    code: number
    reason: string
    success: boolean
  }
}

export interface CounsellorsResponse extends Response {
  content: {
    message: string
    data: CounsellorAttributes[]
  }
}

export interface CounsellorResponse extends Response {
  content: {
    message: string
    data: CounsellorAttributes
  }
}

export const fetchCounsellors = async () => {
  const url = '/api/users'
  const { data } = await axios.get<CounsellorsResponse>(url)
  return data
}

export const fetchCounsellor = async (id: number) => {
  const url = `/api/users?id=${id}`
  const { data } = await axios.get<CounsellorAttributes>(url)
  return data
}

export const createCounsellor = async (counsellor: CounsellorAttributes) => {
  const url =  `${MINDFLICS_USER_API}api/auth/register/counsellor`
  const { data } = await axios.post<any>(url,  counsellor, { headers: {
    'Content-Type' : 'application/json',            
  }  })
  return data
}

export const updateCounsellor = async (user: CounsellorAttributes) => {
  const url = '/api/users'
  const { data } = await axios.patch<CounsellorResponse>(url, { user })
  return data
}

export const deleteCounsellor = async (id: number) => {
  const url = '/api/users'
  const { data } = await axios.delete<CounsellorResponse>(url, { data: { id } })
  return data
}
