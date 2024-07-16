'use server'

import axios from 'axios'

import type { TeacherAttributes } from '@/domain/db/mindflics/Teacher'
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

export interface TeachersResponse extends Response {
  content: {
    message: string
    data: TeacherAttributes[]
  }
}

export interface TeacherResponse extends Response {
  content: {
    message: string
    data: TeacherAttributes
  }
}

export const fetchTeachers = async () => {
  const url = '/api/users'
  const { data } = await axios.get<TeachersResponse>(url)
  return data
}

export const fetchTeacher = async (id: number) => {
  const url = `/api/users?id=${id}`
  const { data } = await axios.get<TeacherAttributes>(url)
  return data
}

export const createTeacher = async (teacher: TeacherAttributes) => {
  const url =  `${MINDFLICS_USER_API}api/auth/register/teacher`
  const { data } = await axios.post<any>(url,  teacher, { headers: {
    'Content-Type' : 'application/json',            
  }  })
  return data
}

export const updateTeacher = async (user: TeacherAttributes) => {
  const url = '/api/users'
  const { data } = await axios.patch<TeacherResponse>(url, { user })
  return data
}

export const deleteTeacher = async (id: number) => {
  const url = '/api/users'
  const { data } = await axios.delete<TeacherResponse>(url, { data: { id } })
  return data
}
