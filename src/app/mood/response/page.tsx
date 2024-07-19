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
import Typography from '@mui/material/Typography'

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

              <Grid className={ styles.footer_response_mood_tracker }>
                <Typography className={ styles.text_footer_response_mood_tracker }>
                  Remember you can also create a new entry on your journal to develope more about it.
                </Typography>

                <svg
                  fill="none"
                  height="43"
                  viewBox="0 0 50 43"
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 21.433a4 4 0 004 4h31.68L25.174 35.94a4 4 0 005.653 5.653L48.16 24.26a4 4 0 000-5.654L30.827 1.273a4 4 0 10-5.653 5.653L35.68 17.433H4c-2.208 0-4 1.792-4 4z"
                    fill="#03989E"
                  />
                </svg>
              </Grid>
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