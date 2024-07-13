import React from 'react'
import { TextFieldElement } from 'react-hook-form-mui'

export function NameschoolField() {
  return (
    <TextFieldElement
      fullWidth
      required
      id="nameschool"
      label="Nameschool"
      margin="normal"
      name="nameschool"
    />
  )
}
