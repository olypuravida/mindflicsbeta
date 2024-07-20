'use client'

import React, { useCallback, useState } from 'react'
import Container from '@mui/material/Container'
import styles from './styles.module.scss'
import Grid from '@mui/material/Grid'
import Chip from '@mui/material/Chip'
import { FormContainer, useForm, TextFieldElement } from 'react-hook-form-mui'
import type { SignUpFormJournalsValues } from './props-types'
import { Alert, Box, Button, IconButton, Snackbar } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import type { JournalAttributes } from '@/domain/db/mindflics/Journal/types'
import { ActionsForm } from '@/app/containers/forms/mindflics/journal/components/actions'
import { createJournal } from '@/infra/services/mindflics/journals'
import { appCurrentUser } from '@/domain/providers/store'

export function ContentJournal() {

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [open, setOpen] = React.useState(false)
  const [messageSuccess, setMessageSuccess] = React.useState(false)
  const currentUser = appCurrentUser()

  console.log('Actual user')
  console.log(currentUser)

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

  const formCtx = useForm<SignUpFormJournalsValues>({
    defaultValues: {
      title: '',
      content: '',
      userId: ''
    },
  })

  const onSubmit = useCallback(async (data: SignUpFormJournalsValues) => {
    setError(null)
    setIsLoading(true)

    try {
      console.log(data)

      const dataJournal:JournalAttributes = {
        title : data.title,
        content : data.content,
        userId: currentUser?.id
      }
      
      console.log(dataJournal)

      const { content: { message }, status } =  await createJournal(dataJournal)
      console.log(message)

      //const { content: { message, user } } = await createStudent(response)
      //console.info({ message, user })

      console.log('status response')
      console.log(status)

      if(status.success) {
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
      <Container className={ styles.journal_container }>
        <Grid container spacing={ 2 }>
          <Grid item md={ 12 } xs={ 12 }>

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

                <Grid container spacing={ 2 }>

                  <Grid item md={ 9 } xs={ 6 }>

                    <TextFieldElement
                      fullWidth
                      required
                      InputLabelProps={ {
                      sx: {
                      fontSize: '14px',
                      top: '-10px'
                      },
                      } }
                      id="title"
                      inputProps={
                            { className: styles.journal_title }
                      }
                      label="Title"
                      name="title"
                    />
                  </Grid>

                  <Grid item md={ 3 } xs={ 6 }>
                    <Chip 
                      className={ styles.chip_second_journal } 
                      label="08/12/2024 | 16:01"
                    />
                  </Grid>

                </Grid>
                

                <Grid container className={ styles.grid_journal_text } spacing={ 2 }>
                  <Grid item md={ 12 } xs={ 12 }>
                    <TextFieldElement
                      fullWidth
                      multiline
                      id="content"
                      inputProps={
                        { className: styles.journal_content }
                      }   
                      name="content"
                      rows={ 12 }
                    />
                  </Grid>

                </Grid>
        
                <ActionsForm isLoading={ isLoading } />
              </Box>
            </FormContainer>
    
            

          </Grid>

        </Grid>

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
          
      </Container>
    )
}