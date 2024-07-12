'use client'

import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import styles from './styles.module.scss'


export function Messages() {
    return (
      <Card className={ styles.container_message } sx={ { minWidth: 275 } }>
        <CardContent>
          <Typography 
            className={ styles.title_assignment } 
            component="div" 
            variant="h5"
          >
            Messages
          </Typography>

          <Grid container className={ styles.grid_assignments } spacing={ 2 }>
            <Grid item xs={ 8 }>
              <Chip 
                className={ styles.chip_first_assignment } 
                label="#textMessageID"
              />
            </Grid>

            <Grid item className={ styles.grid_second_assignment } xs={ 4 }>
              <Chip 
                className={ styles.chip_second_assignment } 
                label="08/12/2024 | 16:01"
              />
            </Grid>
          </Grid>

          <Grid container className={ styles.grid_assignments } spacing={ 2 }>
            <Grid item xs={ 8 }>
              <Chip 
                className={ styles.chip_first_assignment } 
                label="#textMessageID"
              />
            </Grid>

            <Grid item className={ styles.grid_second_assignment } xs={ 4 }>
              <Chip 
                className={ styles.chip_second_assignment } 
                label="08/12/2024 | 16:01"
              />
            </Grid>
          </Grid>

          <Grid container className={ styles.grid_assignments } spacing={ 2 }>
            <Grid item xs={ 8 }>
              <Chip 
                className={ styles.chip_first_assignment } 
                label="#textMessageID"
              />
            </Grid>

            <Grid item className={ styles.grid_second_assignment } xs={ 4 }>
              <Chip 
                className={ styles.chip_second_assignment } 
                label="08/12/2024 | 16:01"
              />
            </Grid>
          </Grid>

          <Grid container className={ styles.grid_assignments } spacing={ 2 }>
            <Grid item xs={ 8 }>
              <Chip 
                className={ styles.chip_first_assignment } 
                label="#textMessageID"
              />
            </Grid>

            <Grid item className={ styles.grid_second_assignment } xs={ 4 }>
              <Chip 
                className={ styles.chip_second_assignment } 
                label="08/12/2024 | 16:01"
              />
            </Grid>
          </Grid>

          <Grid container className={ styles.grid_assignments } spacing={ 2 }>
            <Grid item xs={ 8 }>
              <Chip 
                className={ styles.chip_first_assignment } 
                label="#textMessageID"
              />
            </Grid>

            <Grid item className={ styles.grid_second_assignment } xs={ 4 }>
              <Chip 
                className={ styles.chip_second_assignment } 
                label="08/12/2024 | 16:01"
              />
            </Grid>
          </Grid>

        </CardContent>

        <CardActions className={ styles.card_actions_assigment }>
          <Button 
            className={ styles.button_assignment } 
            size="small"
            variant="outlined"
          >
            See more
          </Button>
        </CardActions>
      </Card>
    )
}