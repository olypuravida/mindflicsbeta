'use client'

import React from 'react'
import Container from '@mui/material/Container'
import styles from './styles.module.scss'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'

export function Badges() {
    return (

      <Container className={ styles.badge_container }>
        <WorkspacePremiumIcon className={ styles.icon_badge } fontSize="large" />

        <WorkspacePremiumIcon className={ styles.icon_badge } fontSize="large" />

        <WorkspacePremiumIcon className={ styles.icon_badge } fontSize="large" />
      </Container>

    )
}