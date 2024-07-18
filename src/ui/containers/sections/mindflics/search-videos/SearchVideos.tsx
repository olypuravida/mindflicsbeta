'use client'

import React from 'react'
import { SearchIcon } from '@/app/components/common/icons/search/SearchIcon'
import styles from './styles.module.scss'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'
import Paper from '@mui/material/Paper'



export function SearchVideos() {
    return (
      <Container className={ styles.search_container }>
        <Grid container spacing={ 2 }>
          <Grid item className={ styles.search_bar } xs={ 8 }>
            <Paper
              className={ styles.paper_search }
              component="form"
              sx={ { display: 'flex', alignItems: 'center' } }
            >

              <InputBase
                inputProps={ { 'aria-label': 'search' } }
                placeholder="Search"
                sx={ { ml: 1, flex: 1 } }
              />

              <IconButton aria-label="search" sx={ { p: '10px' } } type="button">
                <SearchIcon />
              </IconButton>

            </Paper>
          </Grid>

          <Grid item xs={ 2 }>

            <Container>
              <Button 
                className={ styles.action_button } 
                size="large"
                variant="contained"
              >
                Videos
              </Button>
            </Container>

          </Grid>

          <Grid item xs={ 2 }>
            <Container>
              <Button 
                className={ styles.action_button } 
                size="large"
                variant="contained"
              >
                Exercises
              </Button>
            </Container>
          </Grid>

        </Grid>
      </Container>
    )
}