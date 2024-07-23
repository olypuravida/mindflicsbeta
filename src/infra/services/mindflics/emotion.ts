'use server'

import axios from 'axios'

import type { EmotionAttributes } from '@/domain/db/mindflics/Emotion'
import { MINDFLICS_EMOTION_API } from '@/domain/constants/env'

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

export interface EmotionsResponse extends Response {
  content: {
    message: string
    data: EmotionAttributes[]
  }
}

export interface EmotionResponse extends Response {
  content: {
    message: string
    data: EmotionAttributes
  }
}

export const fetchEmotions = async () => {
  const url = '/api/users'
  const { data } = await axios.get<EmotionsResponse>(url)
  return data
}

export const fetchEmotion = async (id: number) => {
  const url = `/api/users?id=${id}`
  const { data } = await axios.get<EmotionAttributes>(url)
  return data
}

export const createEmotion = async (userId: any, emotion: EmotionAttributes, userToken: any) => {
  const url =  `${MINDFLICS_EMOTION_API}/api/emotions/user/${userId}`
  const { data } = await axios.post<any>(url,  emotion, { headers: {
    'Content-Type' : 'application/json',            
    'Authorization':  `Bearer ${userToken}`,
  }  })
  return data
}

export const updateEmotion = async (user: EmotionAttributes) => {
  const url = '/api/users'
  const { data } = await axios.patch<EmotionResponse>(url, { user })
  return data
}

export const deleteEmotion = async (id: number) => {
  const url = '/api/users'
  const { data } = await axios.delete<EmotionResponse>(url, { data: { id } })
  return data
}
