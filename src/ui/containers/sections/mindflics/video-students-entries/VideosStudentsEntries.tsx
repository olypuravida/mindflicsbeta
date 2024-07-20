'use client'

import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import styles from './styles.module.scss'
import { VideosStudentsEntriesItems } from '../videos-studentds-entries-items'


export function VideoStudentsEntries() {
    return (
      <Card className={ styles.container_message }>
        <CardContent>

          <VideosStudentsEntriesItems />  

          <VideosStudentsEntriesItems />  

          <VideosStudentsEntriesItems />  

          <VideosStudentsEntriesItems />  

        </CardContent>

      </Card>
    )
}