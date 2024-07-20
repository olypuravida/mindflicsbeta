'use client'

import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import { Footer } from '@/app/containers/footer'
import { SidebarLeft } from '@/app/containers/sections/mindflics/sidebar-left'
import { appCurrentUser } from '@/domain/providers/store'
import { useRouter } from 'next/navigation'
import { ContentJournal } from '@/app/containers/sections/mindflics/content-journal'
import { TitleJournal } from '@/app/containers/sections/mindflics/title-journal'
import Container from '@mui/material/Container'
import styles from './styles.module.scss'
import { SidebarRightJournal } from '@/app/containers/sections/mindflics/sidebar-right-journal'

export default function Home() {


  const router = useRouter()
  const currentUser = appCurrentUser as any

  console.log('videos')
  console.log(currentUser)

  if (currentUser) {
    return (
      <>
        {/* <Header /> */}
        <Box component="main">
          <SidebarLeft />
  
          <Grid container direction="column">
            <TitleJournal />

            <Container className={ styles.container_journal }>
              <ContentJournal />
            </Container>

          </Grid>

          <SidebarRightJournal />
  
        </Box>
  
        <Footer />
      </>
    )
  } else {
    router.push('/auth/sign-in')
  }
  
}
