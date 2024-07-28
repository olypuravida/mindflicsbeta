'use server'

import axios from 'axios'

import { MINDFLICS_VIDEO_API } from '@/domain/constants/env'

export const videoList = async (token: any) => {
  const url = `${MINDFLICS_VIDEO_API}api/video`
  const { data } = await axios.get<any>(url, { headers: {
    'Content-Type' : 'application/json',
    'Authorization':  `Bearer ${token}`,           
  }  })
  return data
}

export const videoSingle = async (videoId: any, token: any) => {
  const url = `${MINDFLICS_VIDEO_API}api/video/${videoId}`

  const { data } = await axios.get<any>(url, { headers: {
    'Authorization':  `Bearer ${token}`,      
  }, responseType: 'blob' })
  return data

}