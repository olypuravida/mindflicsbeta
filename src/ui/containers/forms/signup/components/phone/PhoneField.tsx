import React from 'react'
import { TextFieldElement } from 'react-hook-form-mui'

export function PhoneField() {
  return (
    <TextFieldElement
      fullWidth
      required
      id="phone"
      label="Phone"
      margin="normal"
      name="phone"
    />
  )
}
