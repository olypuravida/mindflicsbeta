'use client'

import React from 'react'
import styles from './styles.module.scss'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Link from 'next/link'


export function ResponseVerifyEmailError() {
    return (
      <Container className={ styles.container_response_mood_tracker }>
        <Grid>

          <Container className={ styles.container_icon_verified }>

            <svg
              height="200"
              version="1.1"
              viewBox="0 0 512 512"
              width="200"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 256c0 141.384 114.615 256 256 256l22.261-256L256 0C114.615 0 0 114.615 0 256z"
                fill="#FF7855"
              />

              <path
                d="M256 0v512c141.384 0 256-114.616 256-256S397.384 0 256 0z"
                fill="#FF562B"
              />

              <path
                d="M161.555 114.333L114.333 161.555 208.778 256 114.333 350.445 161.555 397.667 256 303.222 278.261 256 256 208.778z"
                fill="#FFF"
              />

              <path
                d="M397.667 161.555L350.445 114.333 256 208.778 256 303.222 350.445 397.667 397.667 350.445 303.222 256z"
                fill="#FFEAC3"
              />
            </svg>

          </Container>

          <Typography className={ styles.title_response_mood_tracker }>
            Error activating account
          </Typography>

          <Typography className={ styles.subtitle_response_mood_tracker }>
            Your account has not been active, please contact your system administrator.
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