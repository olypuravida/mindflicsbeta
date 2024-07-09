'use client'

import React, { useCallback, useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'

import { DataGrid } from '@/app/containers/data-grid/DataGrid'
import { DeleteAlert } from '@/app/components/delete-alert/DeleteAlert'

import { bookingsData, useHotelsActions } from '@/domain/providers/store/features/hotels'
import type { BookingAttributes } from '@/domain/db/features/Booking/types'

import type { BookingResponse } from '@/infra/services/region/bookings'
import {
  createBooking,
  deleteBooking,
  fetchBookings,
  updateBooking,
} from '@/infra/services'

import { BookingModal } from '../modal'
import columns from './columns'

export function BookingsList() {
  const [loading, setLoading] = useState(false)
  const [notification, setNotification] = useState('')
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [openAlert, setOpenAlert] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [modeModal, setModeModal] = useState<'view' | 'edit' | 'add'>('add')
  const [selectedBooking, setSelectedBooking] = useState<BookingAttributes | null>()
  const { setBookings } = useHotelsActions()
  const bookings = bookingsData()

  const loadBookings = useCallback(async() => {
    const { content: { data } } = await fetchBookings()
    setBookings(data as any)
    setLoading(false)
  }, [])

  useEffect(() => { loadBookings() }, [])

  const onToggleModal = useCallback((_: any, reason: string) => {
    if (reason !== 'backdropClick') {
      setOpenModal(!openModal)
    }
  }, [openModal])

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

    const { content: { message } } = await deleteBooking(selectedBooking.id)
    setNotification(message)
    setOpenSnackbar(true)

    await loadBookings()
  }, [selectedBooking])

  const onSubmit = useCallback(async (data: BookingAttributes) => {
    setOpenModal(false)
    setLoading(true)
    let response: BookingResponse
    console.info({ data, modeModal })

    try {
      if (modeModal === 'edit') {
        response = await updateBooking(data)
      } else if (modeModal === 'add') {
        response = await createBooking(data)
      } else { return }

      setNotification(response?.content?.message)
      setOpenSnackbar(true)

      await loadBookings()
    } catch (error: any) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }, [selectedBooking, modeModal])

  const onAddClick = useCallback(() => {
    setSelectedBooking(null)
    setModeModal('add')
    setOpenModal(true)
  }, [])

  const onEditClick = useCallback((item: BookingAttributes) => {
    setSelectedBooking(item)
    setModeModal('edit')
    setOpenModal(true)
  }, [])

  const onDeleteClick = useCallback((item: BookingAttributes) => {
    setSelectedBooking(item)
    setOpenAlert(true)
  }, [])

  const onViewClick = useCallback((item: BookingAttributes) => {
    setSelectedBooking(item)
    setModeModal('view')
    setOpenModal(true)
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

      <BookingModal
        Booking={ selectedBooking }
        mode={ modeModal }
        onClose={ onToggleModal }
        onSubmit={ onSubmit }
        open={ openModal }
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
          { notification }
        </Alert>
      </Snackbar>
    </Box>
  )
}
