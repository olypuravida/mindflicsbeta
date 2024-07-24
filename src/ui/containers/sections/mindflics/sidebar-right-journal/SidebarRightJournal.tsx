'use client'

import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import styles from './styles.module.scss'
import Stack from '@mui/material/Stack'
import { JournalEntries } from '../journal-entries'
import { ProfileSection } from '@/app/containers/header/components/profile-section'
import { Badges } from '../badges/Badges'
import Button from '@mui/material/Button'
import { useRouter } from 'next/navigation'

export function SidebarRightJournal() {

  const router = useRouter()

  const onClickItem = () => {
    router.push('/journal')
  }

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

          <Container>
            <Button 
              className={ styles.button_journal } 
              onClick={ onClickItem }
              size="large"
              variant="contained"
            >
              Create a Journal Entry
            </Button>
          </Container>

        </Container>
      </Grid>
    )
}