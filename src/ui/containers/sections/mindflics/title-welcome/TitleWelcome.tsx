'use client'

import React from 'react'
import styles from './styles.module.scss'
import { appCurrentUser } from '@/domain/providers/store'

export function TitleWelcome() {
  const currentUser = appCurrentUser() as any
    return (
      <h1 className={ styles.title_welcome }>
        Welcome, 
        {' '}

        { currentUser.username }
      </h1>
    )
}