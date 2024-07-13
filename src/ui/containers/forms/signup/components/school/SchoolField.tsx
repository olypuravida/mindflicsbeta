import React from 'react'
import { TextFieldElement } from 'react-hook-form-mui'

export function SchoolField() {
  return (
    <TextFieldElement
      fullWidth
      required
      id="school"
      label="School"
      margin="normal"
      name="school"
    />
  )
}
