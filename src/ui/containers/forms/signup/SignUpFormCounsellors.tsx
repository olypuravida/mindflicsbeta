'use client'

import React, { useCallback, useState } from 'react'
import { useRouter } from 'next/navigation'
import { FormContainer, useForm } from 'react-hook-form-mui'
import { Alert, Box } from '@mui/material'

import { authLogin } from '@/infra/services'
import {
  UsernameField,
  PasswordField,
  ActionsForm,
  NameField,
  EmailField,
  GenderBirthField,
} from './components'

import type { SignUpFormValues } from './props-types'
import styles from './styles.module.scss'
import { PhoneField } from './components/phone'
import { AddressField } from './components/address'
import { SchoolField } from './components/school'
import { ClassField } from './components/class'
import { PositionField } from './components/position/PositionField'
import { TeacherIdField } from './components/info/teacher-id'

export function SignUpFormCounsellors() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const formCtx = useForm<SignUpFormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      gender: '',
      birthDate: '',
      documentType: '',
      documentNumber: '',
      email: '',
      password: '',
      username: '',
    },
  })

  const onSubmit = useCallback(async (data: SignUpFormValues) => {
    setError(null)
    setIsLoading(true)

    try {
      const { content: { message, user } } = await authLogin(data)
      console.info({ message, user })
      router.push('/')
    } catch (err: any) {
      const msg = err?.response?.data?.content?.message ?? err.message
      setError(msg ?? 'Unknown error')
    } finally {
      setIsLoading(false)
    }
  }, [])

  return (
    <FormContainer
      FormProps={ { className: styles.form } }
      formContext={ formCtx }
      onSuccess={ onSubmit }
    >
      <Box className={ styles.formContainer }>
        { !!error && (
          <Alert
            className={ styles.alert }
            severity="error"
          >
            { error }
          </Alert>
        ) }

        <NameField />

        <GenderBirthField />

        <TeacherIdField />

        <EmailField />

        <PhoneField />

        <AddressField />

        <SchoolField />

        <ClassField />

        <PositionField />

        <UsernameField />

        <PasswordField />

        <ActionsForm isLoading={ isLoading } />
      </Box>
    </FormContainer>
  )
}
