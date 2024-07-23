import { emotionDb } from '../../emotion'

export const getEmotions = async () => {
  const { Emotion } = await emotionDb()
  const emotions = await Emotion.findAll()
  return emotions
}
