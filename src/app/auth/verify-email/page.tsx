'use server'

import React from 'react'
import Grid from '@mui/material/Grid'

import Container from '@mui/material/Container'
import styles from './styles.module.scss'
import { ResponseVerifyEmail } from '@/app/containers/sections/mindflics/response-verify-email'
import { verifyEmail } from '@/infra/services/mindflics/students'


export default async function VerifyEmail({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {

  console.log(searchParams?.token)

  try {
    
    console.log(searchParams?.token)

    const { content: { message }, status } =  await verifyEmail(searchParams?.token)
    console.log(message)

    //const { content: { message, user } } = await createStudent(response)
    //console.info({ message, user })

    console.log('status response')
    console.log(status)

    if(status.success) {


      //router.push('/mood/response')

      return (
        <Grid container direction="column">
    
          <Container className={ styles.container_mood_response }>
            <ResponseVerifyEmail />

            <h5> 
              {' '}

              {searchParams?.token}

              {' '}
            </h5>
          </Container>
    
        </Grid>
      )
      
    } else {
      return (
        <Grid container direction="column">
    
          <Container className={ styles.container_mood_response }>
            <h1>Error when trying to verify email, contact your system administrator</h1>
          </Container>
    
        </Grid>
      )
    }
    
  } catch (err: any) {
    const msg = err?.response?.data?.content?.message ?? err.message
    console.log(msg)
    //setError(msg ?? 'Unknown error')
  } finally {
    //setIsLoading(false)
    console.log('Final')
  }


  return (

    <h5> 
      {' Token by get: '}

      {searchParams?.token}

      {' '}
    </h5>
  )

  
}