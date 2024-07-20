import React from 'react'
import {
  Button,
  Grid,
} from '@mui/material'

import type { ActionsFormProps } from './props-types'
import styles from './styles.module.scss'

export function ActionsForm(props: Readonly<ActionsFormProps>) {
  const { isLoading } = props

  return (
    <Grid container className={ styles.grid_buttons_create_journal } spacing={ 2 }>

      <Grid item md={ 6 } xs={ 6 } />

      <Grid
        item
        md={ 3 }
        xs={ 3 }
      >
        <Button
          className={ styles.grid_buttons_journal }
          size="large"
          variant="text"
        >
          Cancel
        </Button>
      </Grid>

      <Grid
        item
        md={ 3 }
        xs={ 3 }
      >
        <Button
          className={ styles.action_button }
          disabled={ isLoading }
          size="large"
          type="submit"
          variant="contained"
        >
          Save entry
        </Button>
      </Grid>

    </Grid>
  )
}
