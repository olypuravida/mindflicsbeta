'use client'

import React from 'react'
import styles from './styles.module.scss'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'


export function ResponseMoodTracker() {
    return (
      <Container className={ styles.container_response_mood_tracker }>
        <Grid>
          <Typography className={ styles.title_response_mood_tracker }>
            Thanks for record your current mood
          </Typography>

          <Typography className={ styles.subtitle_response_mood_tracker }>
            Based on your current mood, we recommend you to watch videos on 
            {' '}

            <b>#CategoryName</b>

            {' '}
            category, that could be helpfull
          </Typography>

          <Container className={ styles.content_btn_response_mood_tracker }>
            <Button 
              className={ styles.action_button } 
              size="large"
              variant="contained"
            >
              Show me
            </Button>
          </Container>
        </Grid>
      </Container>
    )
}