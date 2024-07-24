'use client'

import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import { Footer } from '@/app/containers/footer'
import { SidebarLeft } from '@/app/containers/sections/mindflics/sidebar-left'
import { TitleWelcome } from '../ui/containers/sections/mindflics/title-welcome/TitleWelcome'
import { SidebarRight } from '@/app/containers/sections/mindflics/sidebar-right'
import { appCurrentUser } from '@/domain/providers/store'
import { useRouter } from 'next/navigation'
import styles from './styles.module.scss'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { WheelCotainer } from '@/app/containers/sections/mindflics/mood-tracker/wheel-container/WheelContainer'

export default function Home() {
  
  const router = useRouter()
  const currentUser = appCurrentUser() as any

  console.log('dashboard')
  console.log(currentUser)

  if (currentUser) {
    return (
      <>
        {/* <Header /> */}
        <Box component="main">
          <SidebarLeft />
  
          <Grid container direction="column">
            <TitleWelcome />

            <Container className={ styles.container_mood_wheel }>
              <Typography className={ styles.title_mood_wheel }>
                Mood Tracker
              </Typography>
              
              <WheelCotainer />

              <Typography className={ styles.title_mood_wheel }>
                How are you feeling now?
              </Typography>

              <Typography className={ styles.subtitle_mood_wheel }>
                Select your current mood
              </Typography>
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
