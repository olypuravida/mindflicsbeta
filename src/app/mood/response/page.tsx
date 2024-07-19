'use client'

import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import { Footer } from '@/app/containers/footer'
import { SidebarLeft } from '@/app/containers/sections/mindflics/sidebar-left'
import { appCurrentUser } from '@/domain/providers/store'
import { useRouter } from 'next/navigation'
import Container from '@mui/material/Container'
import styles from './styles.module.scss'
import { TitleWelcome } from '@/app/containers/sections/mindflics/title-welcome'
import { SidebarRight } from '@/app/containers/sections/mindflics/sidebar-right'
import { ResponseMoodTracker } from '@/app/containers/sections/mindflics/response-mood-tracker'

export default function MoodResponse() {


  const router = useRouter()
  const currentUser = appCurrentUser as any

  console.log('response mood tracker')
  console.log(currentUser)

  if (currentUser) {
    return (
      <>
        {/* <Header /> */}
        <Box component="main">
          <SidebarLeft />
  
          <Grid container direction="column">
            <TitleWelcome />

            <Container className={ styles.container_mood_response }>
              <ResponseMoodTracker />
            </Container>

          </Grid>

          <SidebarRight />
  
        </Box>
  
        <Footer />
      </>
    )
  } else {
    router.push('/auth/sign-in')
  }
  
}