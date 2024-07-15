'use client'

import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { MenuLeft } from '../../mindflics/menu-left'
import styles from './styles.module.scss'
import { LogoMindflics } from '@/app/components/common/logo-mindflics'


export function SidebarLeft() {
    return (
      <Grid item xs={ 4 }>
        <Container className={ styles.container }>

          <LogoMindflics />
                
          <MenuLeft />
                
        </Container>
      </Grid>
    )
}