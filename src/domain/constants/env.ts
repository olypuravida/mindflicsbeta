export const IS_PRODUCTION = process.env.NODE_ENV === 'production'
export const IS_DEVELOPMENT = process.env.NODE_ENV !== 'production'

export const MINDFLICS_USER_API = process.env.MINDFLICS_USER_API 
export const MINDFLICS_JOURNAL_API = process.env.MINDFLICS_JOURNAL_API 
export const MINDFLICS_EMOTION_API = process.env.MINDFLICS_EMOTION_API 
export const MINDFLICS_VIDEO_API = process.env.MINDFLICS_VIDEO_API 
export const MINDFLICS_USER_AUTH_TOKEN = process.env.MINDFLICS_USER_AUTH_TOKEN 

export const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY
