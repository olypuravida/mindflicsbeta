import React from 'react'
import { Grid, IconButton, Modal, Stack, Typography } from '@mui/material'
import { IoClose } from 'react-icons/io5'

import { BookingForm } from '../form'
import { BookingView } from '../view'
import type { BookingModalProps } from './props-types'
import styles from './styles.module.scss'

export function BookingModal(props: Readonly<BookingModalProps>) {
  const { booking, mode, onClose, onSubmit, ...rest } = props

  return (
    <Modal
      aria-describedby="booking-modal-description"
      aria-labelledby="booking-modal-title"
      onClose={ onClose }
      { ...rest }
    >
      <Grid
        container
        className={ styles.container }
        sx={ {
          bgcolor: 'background.paper',
          maxHeight: { xs: '90vh', md: '90vw', lg: '80vh' },
          width: { xs: '80vw', md: '70vw' },
          maxWidth: { lg: '50vw' },
        } }
      >
        <Grid item className={ styles.header } xs={ 12 }>
          <Typography variant="h4">
            { mode === 'add' && 'Add booking' }

            { mode === 'edit' && 'Edit booking' }

            { mode === 'view' && 'Booking details' }
          </Typography>

          <Stack>
            <IconButton onClick={ onClose as any }>
              <IoClose />
            </IconButton>
          </Stack>
        </Grid>

        <Grid item xs={ 12 }>
          { (mode === 'view') && (
            <BookingView booking={ booking as any } />
          ) }

          { (mode === 'edit' || mode === 'add') && (
            <BookingForm
              booking={ booking }
              onCancel={ onClose }
              onSubmit={ onSubmit }
            />
          ) }
        </Grid>
      </Grid>
    </Modal>
  )
}
