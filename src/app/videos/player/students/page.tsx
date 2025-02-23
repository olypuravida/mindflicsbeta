'use client'

import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import { Footer } from '@/app/containers/footer'
import { SidebarLeft } from '@/app/containers/sections/mindflics/sidebar-left'
import { appCurrentUser } from '@/domain/providers/store'
import { useRouter } from 'next/navigation'
import { SearchVideos } from '@/app/containers/sections/mindflics/search-videos'
import Container from '@mui/material/Container'
import { FilterCategoryVideos } from '@/app/containers/sections/mindflics/filter-category-videos'
import styles from './styles.module.scss'
import { TitleVideoPlayerStudents } from '@/app/containers/sections/mindflics/title-video-player-students'
import { SidebarRightVideosStudents } from '@/app/containers/sections/mindflics/sidebar-right-videos-students'
import { ContentVideoPlayerStudents } from '@/app/containers/sections/mindflics/content-video-player-students/ContentVideoPlayerStudents'

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
            
            <TitleVideoPlayerStudents />

            <Container>
              <Grid container spacing={ 2 }>
                <Grid item xs={ 4 } />

                <Grid item xs={ 8 }>
                  <SearchVideos />
                </Grid>
              </Grid>
            </Container>

            <Container>
              <Grid container spacing={ 2 }>
                <Grid item xs={ 4 } />
                
                <Grid item xs={ 8 }>
                  <FilterCategoryVideos />
                </Grid>
              </Grid>
            </Container>

            <Container className={ styles.content_video_player_students }>

              <Grid container spacing={ 2 }>
              
                <Grid item xs={ 8 }>
                  <ContentVideoPlayerStudents />
                </Grid>

                <Grid item xs={ 4 }>
                  <SidebarRightVideosStudents />
                </Grid>

              </Grid>
            </Container>
  
          </Grid>
        
        </Box>
  
        <Footer />
      </>
    )
  } else {
    router.push('/auth/sign-in')
  }
  
}
