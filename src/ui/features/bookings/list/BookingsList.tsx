'use client'

import React, { useCallback, useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'

import { DataGrid } from '@/app/containers/data-grid/DataGrid'
import { DeleteAlert } from '@/app/components/delete-alert/DeleteAlert'

import { bookingsData, useHotelsActions } from '@/domain/providers/store/features/hotels'
import type { BookingAttributes } from '@/domain/db/features/Booking/types'


import {
  fetchBookings,
} from '@/infra/services'

import columns from './columns'

export function BookingsList() {
  const [loading, setLoading] = useState(false)
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [openAlert, setOpenAlert] = useState(false)
  const [selectedBooking, setSelectedBooking] = useState<BookingAttributes | null>()
  const { setBookings } = useHotelsActions()
  const bookings = bookingsData()

  const loadBookings = useCallback(async() => {
    const { content: { data } } = await fetchBookings()
    setBookings(data as any)
    setLoading(false)
  }, [])

  useEffect(() => { loadBookings() }, [])



  const onCloseSnackbar = useCallback(() => {
    setOpenSnackbar(false)
  }, [])

  const onCloseAlert = useCallback(() => {
    setOpenAlert(false)
  }, [])

  const onConfirmDelete = useCallback(async () => {
    if (!selectedBooking) return
    setOpenAlert(false)
    setLoading(true)

 
    await loadBookings()
  }, [selectedBooking])



  const onAddClick = useCallback(() => {
    setSelectedBooking(null)
  }, [])

  const onEditClick = useCallback((item: BookingAttributes) => {
    setSelectedBooking(item)
  }, [])

  const onDeleteClick = useCallback((item: BookingAttributes) => {
    setSelectedBooking(item)
    setOpenAlert(true)
  }, [])

  const onViewClick = useCallback((item: BookingAttributes) => {
    setSelectedBooking(item)
  }, [])

  return (
    <Box>
      <DataGrid
        disableRowSelectionOnClick
        useActions
        useAddButton
        columns={ columns }
        loading={ !bookings || !bookings.length || loading }
        onAddClick={ onAddClick }
        onDeleteClick={ onDeleteClick }
        onEditClick={ onEditClick }
        onViewClick={ onViewClick }
        rows={ bookings }
      />



      <DeleteAlert
        message="Are you sure you want to delete this Booking?"
        onClose={ onCloseAlert }
        onConfirm={ onConfirmDelete }
        open={ openAlert }
        title="Delete Booking"
      />

      <Snackbar
        anchorOrigin={ { vertical: 'top', horizontal: 'right' } }
        autoHideDuration={ 3000 }
        onClose={ onCloseSnackbar }
        open={ openSnackbar }
      >
        <Alert
          onClose={ onCloseSnackbar }
          severity="success"
          sx={ { width: '100%' } }
          variant="filled"
        >
          {  }
        </Alert>
      </Snackbar>
    </Box>
  )
}
