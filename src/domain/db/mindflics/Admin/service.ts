import { teacherDb } from '../../teacher'

export const getTeachers = async () => {
  const { Teacher } = await teacherDb()
  const teachers = await Teacher.findAll()
  return teachers
}
