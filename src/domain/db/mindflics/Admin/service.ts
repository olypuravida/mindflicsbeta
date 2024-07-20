import { adminDb } from '../../admin'

export const getAdmins = async () => {
  const { Admin } = await adminDb()
  const admins = await Admin.findAll()
  return admins
}
