'use client'

import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import styles from './styles.module.scss'
import { JournalEntriesItems } from '../journal-entries-items/JournalEntriesItems'


export function JournalEntries() {
    return (
      <Card className={ styles.container_message } sx={ { minWidth: 275 } }>
        <CardContent>
          <Typography 
            className={ styles.title_assignment } 
            component="div" 
            variant="h5"
          >
            Journal Entries
          </Typography>

          <JournalEntriesItems />  

          <JournalEntriesItems />  

          <JournalEntriesItems />  

          <JournalEntriesItems />  

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