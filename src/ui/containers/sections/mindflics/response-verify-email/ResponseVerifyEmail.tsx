'use client'

import React from 'react'
import styles from './styles.module.scss'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Link from 'next/link'


export function ResponseVerifyEmail() {
    return (
      <Container className={ styles.container_response_mood_tracker }>
        <Grid>

          <Container className={ styles.container_icon_verified }>

            <svg
              className="icon"
              height="200"
              viewBox="0 0 1024 1024"
              width="200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M64 512a448 448 0 10896 0 448 448 0 10-896 0z"
                fill="#4CAF50"
              />

              <path
                d="M738.133 311.467L448 601.6 328.533 482.133 268.8 541.867l179.2 179.2L797.867 371.2z"
                fill="#CCFF90"
              />
            </svg>

          </Container>

          <Typography className={ styles.title_response_mood_tracker }>
            Account actived
          </Typography>

          <Typography className={ styles.subtitle_response_mood_tracker }>
            Thank you, your account has been actived successfully. Please use the link below to login to your account.
          </Typography>

          <Container className={ styles.content_btn_response_mood_tracker }>
            <Link 
              className={ styles.action_button } 
              href={ '/auth/sign-in' }
            >
              Log in
            </Link>
          </Container>
        </Grid>
      </Container>
    )
}