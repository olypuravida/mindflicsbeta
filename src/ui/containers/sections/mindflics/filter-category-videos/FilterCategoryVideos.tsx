'use client'

import React from 'react'
import styles from './styles.module.scss'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import OutlinedInput from '@mui/material/OutlinedInput'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'



export function FilterCategoryVideos() {
    return (
      <Container className={ styles.filter_category_videos_container }>
        <Grid container spacing={ 2 }>
          <Grid item className={ styles.input_container_filter_category } xs={ 6 }>
            <InputLabel className={ styles.input_filter_category }>Select a category</InputLabel>
          </Grid>

          <Grid item className={ styles.select_category_filter_container } xs={ 6 }>
            <Select
              className={ styles.select_category_filter }
              input={ <OutlinedInput label="Name" /> }
              value="All"
            >
              <MenuItem key="All" value="All">All</MenuItem>

              <MenuItem key="Category #1" value="Category #1">Category #1</MenuItem>

              <MenuItem key="Category #2" value="Category #2">Category #2</MenuItem>
            </Select>
          </Grid>

        </Grid>
      </Container>
    )
}