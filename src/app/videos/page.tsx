'use client'

import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import { Footer } from '@/app/containers/footer'
import { SidebarLeft } from '@/app/containers/sections/mindflics/sidebar-left'
import { TitleWelcome } from '../../ui/containers/title-welcome/TitleWelcome'
import { SidebarRight } from '@/app/containers/sections/mindflics/sidebar-right'
import { appCurrentUser } from '@/domain/providers/store'
import { useRouter } from 'next/navigation'

export default function Videos() {


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
            <TitleWelcome />
  
            <h1>Video Gallery</h1>
  
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
