/* eslint-disable jsx-a11y/media-has-caption */
'use client'

import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import styles from './styles.module.scss'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'
import Link from 'next/link'
import { videoList } from '@/infra/services/mindflics/videos'
import { VideoSingle } from '../video-single/VideoSingle'

 async function getVideoList(token: any) {
   try {
     const response =  await videoList(token)
     return response
   } catch (error:any) {
     console.log(error.response)
     return error.response
   }
 }

export function ContentVideos( dataParent : any) {

  const [dataVideos, setDataVideos] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchDataVideos = async () => {
      setDataVideos([])
      setIsLoading(true)

      try {
        const { content: { videos } } = await getVideoList(dataParent?.dataAccessToken)
        setDataVideos(videos)
      } catch (error: any) {
        if (error.name === 'AbortError') {
          console.log('Fetch aborted')
        } else {
          console.error('Error fetching data:', error)
        }
      }
      finally {
        setIsLoading(false)
      }
    }
    fetchDataVideos()
  }, [])

  const contentVideos = dataVideos.map((videoItem) =>
    <Grid item key={ videoItem.id } xs={ 3 }>
      <div>
  
        <VideoSingle dataIdVideoSingle={ videoItem.id } dataTokenVideoSingle={ dataParent?.dataAccessToken } />

        <Typography className={ styles.thumb_video_title }>
          <Link href="/videos/player/students">
            { videoItem.title }
          </Link>
        </Typography>

        <Typography className={ styles.thumb_video_subtitle }>
          <Link href="/videos/player/students">
            { videoItem.category }
          </Link>
        </Typography>

      </div>
    </Grid>
    
  )

  if(!isLoading) {

    return (

      <Container className={ styles.thumb_video_container }>
        <Grid container spacing={ 2 }>
          {contentVideos}
        </Grid>
        
      </Container>
    )

  } else {
    return (
      <Container className={ styles.thumb_video_container }>
        <Grid container spacing={ 2 }>
          <h1>No videos found</h1>
        </Grid>
      </Container>
    )
  }

}