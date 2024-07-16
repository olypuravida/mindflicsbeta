import React from 'react'
import { TextFieldElement } from 'react-hook-form-mui'

export function AdminIdField() {
  return (
    <TextFieldElement
      fullWidth
      required
      id="adminId"
      label="AdminId"
      margin="normal"
      name="adminId"
    />
  )
}
