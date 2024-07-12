import React from 'react'
import { TextFieldElement } from 'react-hook-form-mui'

export function TeacherIdField() {
  return (
    <TextFieldElement
      fullWidth
      required
      id="teacherId"
      label="TeacherId"
      margin="normal"
      name="teacherId"
    />
  )
}
