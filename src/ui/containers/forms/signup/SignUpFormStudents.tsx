'use client'

import React, { useCallback, useState } from 'react'
import { FormContainer, useForm } from 'react-hook-form-mui'
import { Alert, Box } from '@mui/material'

import {
  UsernameField,
  PasswordField,
  ActionsForm,
  NameField,
  EmailField,
  GenderBirthField,
} from './components'

import type { SignUpFormStudentsValues } from './props-types'
import styles from './styles.module.scss'
import { PhoneField } from './components/phone'
import { AddressField } from './components/address'
import { ClassField } from './components/class'
import { StudentIdField } from './components/info/student-id'
import { NameschoolField } from './components/nameschool'
import { createStudent } from '@/infra/services/mindflics/students'
import type { StudentAttributes } from '../../../../domain/db/mindflics/Student/types'

export function SignUpFormStudents() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const formCtx = useForm<SignUpFormStudentsValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      birthDate: '',
      address: '',
      phone: '',
      school: '',
      position: '',
      class: '',
      docType: '',
      docID: '',
      avatar: '',
      gender: '',
      email: '',
      password: '',
      username: '',
    },
  })

  const onSubmit = useCallback(async (data: SignUpFormStudentsValues) => {
    setError(null)
    setIsLoading(true)

    try {
      console.log(data)

      const dataStudent:StudentAttributes = {
        username : data.username,
        email : data.email,
        password: data.password,
        info : {
          firstname : data.firstName,
          lastname : data.lastName,
          birthdate: data.birthDate, 
          address: data.address,
          phone: data.phone,
          school: data.school,
          position: data.position,
          class: data.class,
          doctype: data.docType,
          docid: data.docID,
          avatar: data.avatar,
          gender: data.gender
        }
      }

      const response = await createStudent(dataStudent)
      console.log(response)

      // const { content: { message, student } } = await createStudent(data)
      // console.info({ message, student })
      // router.push('/')
    } catch (err: any) {
      // const msg = err?.response?.data?.content?.message ?? err.message
      // setError(msg ?? 'Unknown error')
    } finally {
      // setIsLoading(false)
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

        <StudentIdField />

        <EmailField />

        <PhoneField />

        <AddressField />

        <NameschoolField />

        <ClassField />

        <UsernameField />

        <PasswordField />

        <ActionsForm isLoading={ isLoading } />
      </Box>
    </FormContainer>
  )
}
