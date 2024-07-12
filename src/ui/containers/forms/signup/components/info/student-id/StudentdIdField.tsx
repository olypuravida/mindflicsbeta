import React from 'react'
import { TextFieldElement } from 'react-hook-form-mui'

export function StudentIdField() {
  return (
    <TextFieldElement
      fullWidth
      required
      id="studentId"
      label="StudentId"
      margin="normal"
      name="studentId"
    />
  )
}
