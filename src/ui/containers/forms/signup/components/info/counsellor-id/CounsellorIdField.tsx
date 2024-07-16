import React from 'react'
import { TextFieldElement } from 'react-hook-form-mui'

export function CounsellorIdField() {
  return (
    <TextFieldElement
      fullWidth
      required
      id="counsellorId"
      label="CounsellorId"
      margin="normal"
      name="counsellorId"
    />
  )
}
