'use client'

import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import styles from './styles.module.scss'
import Stack from '@mui/material/Stack'
import { ProfileSection } from '../../../header/components/profile-section'
import { Badges } from '../badges'
import { JournalEntries } from '../journal-entries'

export function SidebarRight() {
    return (
      <Grid item xs={ 4 }>
        <Container className={ styles.container }>

          <Stack className={ styles.toolbarRight }>
            <ProfileSection />
          </Stack>
                
          <Badges />

          <Container>
            
            <JournalEntries />

          </Container>

        </Container>
      </Grid>
    )
}