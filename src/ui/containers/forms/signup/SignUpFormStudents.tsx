'use client'

import React, { useCallback, useState } from 'react'
import { FormContainer, useForm } from 'react-hook-form-mui'
import { Alert, Box, Button, IconButton, Snackbar } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

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
  const [open, setOpen] = React.useState(false)
  const [messageSuccess, setMessageSuccess] = React.useState(false)

  const onClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  const action = (
    <>
      <Button color="primary" onClick={ onClose } size="small">
        Aceptar
      </Button>

      <IconButton
        aria-label="close"
        color="inherit"
        onClick={ onClose }
        size="small"
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  )


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
      studentId: '',
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
        data: {
          username : data.username,
          email : data.email,
          password: data.password,
          info : {
            firstName : data.firstName,
            lastName : data.lastName,
            birthDate: data.birthDate+'T00:00:00.420Z', 
            address: data.address,
            phone: data.phone,
            school: data.school,
            position: null,
            class: data.class,
            docType: 'STUDENT_CARD',
            docID: data.studentId,
            avatar: null,
            gender: data.gender
          }
        }
      }
      console.log(dataStudent)

      const { content: { message, user } } =  await createStudent(dataStudent)
      console.log(message)

      //const { content: { message, user } } = await createStudent(response)
      //console.info({ message, user })

      if(user) {
        //router.push('/auth/sign-in')
        setOpen(true)
        setMessageSuccess(message)
      }
      
    } catch (err: any) {
      const msg = err?.response?.data?.content?.message ?? err.message
      setError(msg ?? 'Unknown error')
    } finally {
      setIsLoading(false)
    }
  }, [])


  return (
    <>
      <FormContainer
        FormProps={ { className: styles.form } }
        formContext={ formCtx }
        onSuccess={ onSubmit }
      >
        <Box className={ styles.formContainer }>
          {!!error && (
          <Alert
            className={ styles.alert }
            severity="error"
          >
            {error}
          </Alert>
        )}

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
    
      <Snackbar
        action={ action }
        autoHideDuration={ 6000 }
        className={ styles.snackBarSuccess }
        onClose={ onClose }
        open={ open }
      >
        <Alert
          onClose={ onClose }
          severity="success"
          sx={ { width: '100%' } }
          variant="filled"
        >
          {messageSuccess}
        </Alert>
      </Snackbar>
    </>
  )
}
