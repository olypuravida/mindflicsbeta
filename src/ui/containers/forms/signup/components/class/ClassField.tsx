import React from 'react'
import { TextFieldElement } from 'react-hook-form-mui'

export function ClassField() {
  return (
    <TextFieldElement
      fullWidth
      required
      id="class"
      label="Class"
      margin="normal"
      name="class"
    />
  )
}
