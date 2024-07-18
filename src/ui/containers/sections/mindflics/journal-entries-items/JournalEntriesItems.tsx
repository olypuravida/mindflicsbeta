import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import React from 'react'
import styles from './styles.module.scss'

export function JournalEntriesItems() {
  return (
    <Grid container className={ styles.grid_assignments } spacing={ 2 }>
      <Grid item xs={ 8 }>
        <Chip 
          className={ styles.chip_first_assignment } 
          label="Title"
        />
      </Grid>

      <Grid item className={ styles.grid_second_assignment } xs={ 4 }>
        <Chip 
          className={ styles.chip_second_assignment } 
          label="08/12/2024 | 16:01"
        />
      </Grid>
    </Grid>
  )
}