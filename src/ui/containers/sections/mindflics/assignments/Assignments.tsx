'use client'

import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import styles from './styles.module.scss'
import AssignmentsItems from '../assignments-items/AssignmentsItems'


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

          <AssignmentsItems />  

          <AssignmentsItems />  

          <AssignmentsItems />  

          <AssignmentsItems />  

          <AssignmentsItems />  

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