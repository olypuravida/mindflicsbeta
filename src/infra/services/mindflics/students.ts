import axios from 'axios'

import type { StudentAttributes } from '@/domain/db/mindflics/Student'

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

const validToken = 'xCzuw1zeH9r4gZl5PLiEeJhfvJp95K7Xi4u91uWuxQaxd8ucV530MmFA0mQjZOzbm2mqZ71aB0DkzvwxGeT9ssSwT79vLeGZP6KP7W3jytgJ1AebXH04DHb6TKvCgyFO'

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
  const url = 'https://users-roan-eta.vercel.app/api/auth/register/student'
  const { data } = await axios.post<StudentResponse>(url, { student }, {
    headers: {
      'Content-Type'                    : 'application/json',
      'Access-Control-Allow-Origin'     : 'https://users-roan-eta.vercel.app',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods'    : 'POST',
      'Access-Control-Allow-Headers'    : 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
      'Authorization': 'Bearer ' + validToken               
    }
  })
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
