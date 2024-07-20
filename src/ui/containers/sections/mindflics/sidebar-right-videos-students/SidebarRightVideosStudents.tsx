'use client'

import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import styles from './styles.module.scss'
import { VideoStudentsEntries } from '../video-students-entries'

export function SidebarRightVideosStudents() {
    return (
      <Grid item xs={ 12 }>
        <Container className={ styles.container }>

          <VideoStudentsEntries />

        </Container>
      </Grid>
    )
}