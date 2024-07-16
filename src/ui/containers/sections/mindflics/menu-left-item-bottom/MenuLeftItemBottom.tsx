'use client'

import React from 'react'
import ListItemIcon from '@mui/material/ListItemIcon'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'

import styles from './styles.module.scss'
import SettingsIcon from '@mui/icons-material/Settings'


export function MenuLeftItemBottom() {
    return (
      <MenuItem className={ styles.menu_left_item_bottom }>
        <ListItemIcon>
          <SettingsIcon className={ styles.menu_left_item } fontSize="small" />
        </ListItemIcon>

        <Typography className={ styles.menu_left_item } variant="inherit">Settings</Typography>
      </MenuItem>
        
    )
}