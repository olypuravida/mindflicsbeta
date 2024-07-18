'use client'

import React from 'react'
import styles from './styles.module.scss'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'

export function TitleJournal() {
    return (
      <Container>

        <Grid container spacing={ 2 }>
          <Grid item xs={ 12 }>
            <h1 className={ styles.title_welcome }>Students Journal</h1>
          </Grid>

        </Grid>

      </Container>
    )
}