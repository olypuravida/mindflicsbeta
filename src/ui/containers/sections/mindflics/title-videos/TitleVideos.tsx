'use client'

import React from 'react'
import styles from './styles.module.scss'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import { ProfileSection } from '@/app/containers/header/components/profile-section'
import { Badges } from '../badges'


export function TitleVideos() {
    return (
      <Container>

        <Grid container spacing={ 2 }>
          <Grid item xs={ 8 }>
            <h1 className={ styles.title_welcome }>Videos & Exercises</h1>
          </Grid>

          <Grid item xs={ 4 }>
            <Stack className={ styles.toolbarRight }>
              <ProfileSection />
            </Stack>
        
            <Badges />
          </Grid>
        </Grid>

      </Container>
    )
}