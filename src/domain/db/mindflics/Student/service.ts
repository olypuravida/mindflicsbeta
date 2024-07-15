import { studentDb } from '../../student'

export const getStudents = async () => {
  const { Student } = await studentDb()
  const students = await Student.findAll()
  return students
}
