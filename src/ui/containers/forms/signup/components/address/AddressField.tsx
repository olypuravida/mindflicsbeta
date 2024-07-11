import React from 'react'
import { TextFieldElement } from 'react-hook-form-mui'

export function AddressField() {
  return (
    <TextFieldElement
      fullWidth
      required
      id="address"
      label="Address"
      margin="normal"
      name="address"
    />
  )
}
