'use client'

import React from 'react'
import Container from '@mui/material/Container'
import styles from './styles.module.scss'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Chip from '@mui/material/Chip'

export function ContentJournal() {
    return (
      <Container className={ styles.journal_container }>
        <Grid container spacing={ 2 }>
          <Grid item md={ 8 } xs={ 6 }>
            <TextField
              fullWidth
              InputLabelProps={ {
                sx: {
                  fontSize: '14px',
                  top: '-10px'
                },
              } }
              inputProps={
                         { className: styles.journal_title }
              }
              label="Title"
            />
          </Grid>

          <Grid item md={ 4 } xs={ 6 }>
            <Grid item className={ styles.grid_second_journal } xs={ 4 }>
              <Chip 
                className={ styles.chip_second_journal } 
                label="08/12/2024 | 16:01"
              />
            </Grid>
          </Grid>
        </Grid>
            
        <Grid container spacing={ 2 }>
          <Grid item md={ 8 } xs={ 6 }>
            <TextField
              multiline
              defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
              id="outlined-multiline-static"
              inputProps={
                { className: styles.journal_content }
              }
              rows={ 4 }
            />
          </Grid>
        </Grid>


      </Container>
    )
}