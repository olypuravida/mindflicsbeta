'use client'

import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import { Footer } from '@/app/containers/footer'
import { SidebarLeft } from '@/app/containers/sections/mindflics/sidebar-left'
import { TitleVideos } from '../../ui/containers/sections/mindflics/title-videos/TitleVideos'
import { appCurrentUser } from '@/domain/providers/store'
import { useRouter } from 'next/navigation'
import { SearchVideos } from '@/app/containers/sections/mindflics/search-videos'
import Container from '@mui/material/Container'
import { FilterCategoryVideos } from '@/app/containers/sections/mindflics/filter-category-videos'
import { ContentVideos } from '@/app/containers/sections/mindflics/content-videos'
import Typography from '@mui/material/Typography'
import styles from './styles.module.scss'

export default function Videos() {

  const router = useRouter()
  const currentUser = appCurrentUser()

  console.log(currentUser?.accessToken)

  if (currentUser?.accessToken) {
    return (
      <>
        {/* <Header /> */}
        <Box component="main">
          <SidebarLeft />
  
          <Grid container direction="column">
            
            <TitleVideos />

            <Grid container direction="column">


              <Container>
                <Grid container spacing={ 2 }>
                  <Grid item xs={ 3 } />

                  <Grid item xs={ 9 }>
                    <SearchVideos />
                  </Grid>
                </Grid>
              </Container>

              <Container>
                <Grid container spacing={ 2 }>
                  <Grid item xs={ 4 }>
                    <Typography className={ styles.title_videos }>
                      All the Videos
                    </Typography>
                  </Grid>
                
                  <Grid item xs={ 8 }>
                    <FilterCategoryVideos />
                  </Grid>
                </Grid>
              </Container>

              <ContentVideos dataAccessToken={ currentUser?.accessToken } />

            </Grid>
  
          </Grid>
  
 
        </Box>
  
        <Footer />
      </>
    )
  } else {
    router.push('/auth/sign-in')
  }
  
}
