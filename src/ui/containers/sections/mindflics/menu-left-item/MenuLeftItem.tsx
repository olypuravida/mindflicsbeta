'use client'

import React from 'react'
import ListItemIcon from '@mui/material/ListItemIcon'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import styles from './styles.module.scss'

import DashboardIcon from '@mui/icons-material/Dashboard'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'
import DescriptionIcon from '@mui/icons-material/Description'
import NoteAltIcon from '@mui/icons-material/NoteAlt'
import Link from 'next/link'


export function MenuLeftItem() {
    return (
      <>
        <MenuItem className={ styles.menu_left_item_li }>
          <ListItemIcon>
            <DashboardIcon className={ styles.menu_left_item } fontSize="small" />
          </ListItemIcon>

          <Link href="/">
            <Typography className={ styles.menu_left_item } variant="inherit">Dashboard</Typography>
          </Link>
          
        </MenuItem>

        <MenuItem className={ styles.menu_left_item_li }>
          <ListItemIcon>
            <OndemandVideoIcon className={ styles.menu_left_item } fontSize="small" />
          </ListItemIcon>

          <Link href="/videos">
            <Typography className={ styles.menu_left_item } variant="inherit">Videos</Typography>
          </Link>
          
        </MenuItem>

        <MenuItem className={ styles.menu_left_item_li }>
          <ListItemIcon>
            <DescriptionIcon className={ styles.menu_left_item } fontSize="small" />
          </ListItemIcon>

          <Link href="/assignments">
            <Typography className={ styles.menu_left_item } variant="inherit">Assignments</Typography>
          </Link>
          
        </MenuItem>

        <MenuItem className={ styles.menu_left_item_li }>
    
          <ListItemIcon>
            <NoteAltIcon className={ styles.menu_left_item } fontSize="small" />
          </ListItemIcon>

          <Link href="/journal">
            <Typography className={ styles.menu_left_item } variant="inherit">Journal</Typography>
          </Link>
          
        </MenuItem>
      </>
        
    )
}