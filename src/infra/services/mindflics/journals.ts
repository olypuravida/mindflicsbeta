'use server'

import axios from 'axios'

import type { JournalAttributes } from '@/domain/db/mindflics/Journal'
import { MINDFLICS_JOURNAL_API, MINDFLICS_USER_AUTH_TOKEN } from '@/domain/constants/env'

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

export interface JournalsResponse extends Response {
  content: {
    message: string
    data: JournalAttributes[]
  }
}

export interface JournalResponse extends Response {
  content: {
    message: string
    data: JournalAttributes
  }
}

export const fetchJournals = async () => {
  const url = '/api/users'
  const { data } = await axios.get<JournalsResponse>(url)
  return data
}

export const fetchJournal = async (id: number) => {
  const url = `/api/users?id=${id}`
  const { data } = await axios.get<JournalAttributes>(url)
  return data
}

export const createJournal = async (journal: JournalAttributes) => {
  const url =  `${MINDFLICS_JOURNAL_API}/api/journal`
  const { data } = await axios.post<any>(url,  journal, { headers: {
    'Content-Type' : 'application/json',            
    'Authorization':  `Bearer ${MINDFLICS_USER_AUTH_TOKEN}`,
  }  })
  return data
}

export const updateJournal = async (user: JournalAttributes) => {
  const url = '/api/users'
  const { data } = await axios.patch<JournalResponse>(url, { user })
  return data
}

export const deleteJournal = async (id: number) => {
  const url = '/api/users'
  const { data } = await axios.delete<JournalResponse>(url, { data: { id } })
  return data
}
