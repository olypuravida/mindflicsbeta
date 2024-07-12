'use client'

import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'
import styles from './styles.module.scss'
import ListIcon from '@mui/icons-material/List'


export function Assignments() {
    return (
      <Card className={ styles.container_message } sx={ { minWidth: 275 } }>
        <CardContent>
          <Typography 
            className={ styles.title_assignment } 
            component="div" 
            variant="h5"
          >
            My Assignments
          </Typography>

          <Grid container className={ styles.grid_assignments } spacing={ 2 }>
            <Grid item xs={ 8 }>
              <Chip 
                className={ styles.chip_first_assignment } 
                icon={ <OndemandVideoIcon className={ styles.icon_chip_first_assignment } /> } 
                label="#videoName"
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
                icon={ <ListIcon className={ styles.icon_chip_first_assignment } /> } 
                label="#researchName"
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
                icon={ <OndemandVideoIcon className={ styles.icon_chip_first_assignment } /> } 
                label="#videoName"
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
                icon={ <OndemandVideoIcon className={ styles.icon_chip_first_assignment } /> } 
                label="#videoName"
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
                icon={ <ListIcon className={ styles.icon_chip_first_assignment } /> } 
                label="#researchName"
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