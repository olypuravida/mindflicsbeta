import React from 'react'
import { TextFieldElement } from 'react-hook-form-mui'

export function PositionField() {
  return (
    <TextFieldElement
      fullWidth
      required
      id="position"
      label="Position"
      margin="normal"
      name="position"
    />
  )
}
