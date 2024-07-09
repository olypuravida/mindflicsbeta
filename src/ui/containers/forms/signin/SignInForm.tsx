'use client'

import React, { useCallback, useState } from 'react'
import { useRouter } from 'next/navigation'
import { FormContainer, useForm } from 'react-hook-form-mui'
import { Alert, Box } from '@mui/material'

import { useAppActions } from '@/domain/providers/store'
import { authLogin } from '@/infra/services'
import { UsernameField, PasswordField, ActionsForm } from './components'

import type { SignInFormValues } from './props-types'
import styles from './styles.module.scss'

export function SignInForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { setCurrentUser } = useAppActions()
  const router = useRouter()

  const formCtx = useForm<SignInFormValues>({
    defaultValues: {
      password: '',
      username: '',
    },
  })

  const onSubmit = useCallback(async (data: SignInFormValues) => {
    setError(null)
    setIsLoading(true)

    try {
      const { content: { user } } = await authLogin(data)
      setCurrentUser(user)
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
        { error ? (
          <Alert
            className={ styles.alert }
            severity="error"
          >
            { error }
          </Alert>
        ) : null }

        <UsernameField />

        <PasswordField />

        <ActionsForm isLoading={ isLoading } />
      </Box>
    </FormContainer>
  )
}
