import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import styles from './styles.module.scss'
import Stack from '@mui/material/Stack'
import { ProfileSection } from '../../../header/components/profile-section'
import { Assignments } from '../assignments/Assignments'
import { Messages } from '../messages/Messages'
import Button from '@mui/material/Button'
import { Badges } from '../badges'
import { useRouter } from 'next/navigation'

export function SidebarRight() {

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
            
            <Assignments />

            <Messages />

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