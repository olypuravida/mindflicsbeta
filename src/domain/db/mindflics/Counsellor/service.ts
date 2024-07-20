import { counsellorDb } from '../../counsellor'

export const getCounsellors = async () => {
  const { Counsellor } = await counsellorDb()
  const counsellors = await Counsellor.findAll()
  return counsellors
}
