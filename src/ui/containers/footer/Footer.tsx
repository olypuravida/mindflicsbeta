'use client'

import React from 'react'
import { Container, useTheme } from '@mui/material'

import styles from './styles.module.scss'

export function Footer() {
  const { palette } = useTheme()

  return (
    <footer
      className={ styles.footer }
      style={ {
        backgroundColor: palette.secondary.dark,
      } }
    >
      <Container className={ styles.container } />
    </footer>
  )
}
