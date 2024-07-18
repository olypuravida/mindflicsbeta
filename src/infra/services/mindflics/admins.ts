'use server'

import axios from 'axios'

import type { AdminAttributes } from '@/domain/db/mindflics/Admin'
import { MINDFLICS_USER_API , MINDFLICS_USER_AUTH_TOKEN } from '@/domain/constants/env'


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

export interface AdminsResponse extends Response {
  content: {
    message: string
    data: AdminAttributes[]
  }
}

export interface AdminResponse extends Response {
  content: {
    message: string
    data: AdminAttributes
  }
}

export const fetchAdmins = async () => {
  const url = '/api/users'
  const { data } = await axios.get<AdminsResponse>(url)
  return data
}

export const fetchAdmin = async (id: number) => {
  const url = `/api/users?id=${id}`
  const { data } = await axios.get<AdminAttributes>(url)
  return data
}

export const createAdmin = async (admin: AdminAttributes) => {
  const url =  `${MINDFLICS_USER_API}api/auth/register/admin`
  const { data } = await axios.post<any>(url,  admin, { headers: {
    'Content-Type' : 'application/json',
    'Authorization': `Bearer ${MINDFLICS_USER_AUTH_TOKEN}`
  }  })
  return data
}

export const updateAdmin = async (user: AdminAttributes) => {
  const url = '/api/users'
  const { data } = await axios.patch<AdminResponse>(url, { user })
  return data
}

export const deleteAdmin = async (id: number) => {
  const url = '/api/users'
  const { data } = await axios.delete<AdminResponse>(url, { data: { id } })
  return data
}
