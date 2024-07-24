'use server'

import React from 'react'
import Grid from '@mui/material/Grid'

import Container from '@mui/material/Container'
import styles from './styles.module.scss'
import { ResponseVerifyEmail } from '@/app/containers/sections/mindflics/response-verify-email'
import { verifyEmail } from '@/infra/services/mindflics/verify'
import { ResponseVerifyEmailError } from '@/app/containers/sections/mindflics/response-verify-email-error'

interface VerifyEmailProps {
  searchParams: { token: string };
}

async function VerifyStatus(token: string) {
  try {
    const response =  await verifyEmail(token)
    return response
  } catch (error:any) {
    console.log(error.response.data.content)
    return error.response.data
  }
}

export default async function VerifyEmail( { searchParams }: VerifyEmailProps ) {

  const { content: { message }, status } = await VerifyStatus( searchParams.token )
  console.log(message)

  if(status.success) {

    return (
      <Grid container direction="column">
  
        <Container className={ styles.container_mood_response }>
          <ResponseVerifyEmail />
        </Container>
  
      </Grid>
    )
    
  } else {
    return (
      <Grid container direction="column">
  
        <Container className={ styles.container_mood_response }>
          <ResponseVerifyEmailError />
        </Container>
  
      </Grid>
    )
  }

}