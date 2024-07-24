'use server'

import axios from 'axios'

import type { StudentAttributes } from '@/domain/db/mindflics/Student'
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

export interface StudentsResponse extends Response {
  content: {
    message: string
    data: StudentAttributes[]
  }
}

export interface StudentResponse extends Response {
  content: {
    message: string
    data: StudentAttributes
  }
}

export const fetchStudents = async () => {
  const url = '/api/users'
  const { data } = await axios.get<StudentsResponse>(url)
  return data
}

export const fetchStudent = async (id: number) => {
  const url = `/api/users?id=${id}`
  const { data } = await axios.get<StudentAttributes>(url)
  return data
}

export const createStudent = async (student: StudentAttributes) => {
  const url =  `${MINDFLICS_USER_API}api/auth/register/student`
  const { data } = await axios.post<any>(url,  student, { headers: {
    'Content-Type' : 'application/json',            
  }  })
  return data
}

export const updateStudent = async (user: StudentAttributes) => {
  const url = '/api/users'
  const { data } = await axios.patch<StudentResponse>(url, { user })
  return data
}

export const deleteStudent = async (id: number) => {
  const url = '/api/users'
  const { data } = await axios.delete<StudentResponse>(url, { data: { id } })
  return data
}

export const verifyEmail = async (verifyToken: any) => {
  const url =  `${MINDFLICS_USER_API}/api/auth/verify/email`
  const { data } = await axios.post<any>(url,  null, { headers: {
    'Content-Type' : 'application/json',
    'Authorization':  `Bearer ${verifyToken}`,           
  }  })
  return data
}
