'use client'

import { bindActionCreators } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

import { useAppDispatch } from '../../shared/hooks'
import {
  setBookings,
  setCitiesOptions,
  setHotels,
  setRooms,
} from './actions'

import type { RootState } from '../../shared/types'
import type { HotelsState } from './types'

/* Selectors */
export const useHotelsState = (): HotelsState => (
  useSelector(({ hotels }: RootState) => hotels)
)

export const hotelsData = () => useHotelsState().hotels
export const roomsData = () => useHotelsState().rooms
export const citiesOptions = () => useHotelsState().citiesOptions
export const bookingsData = () => useHotelsState().bookings

/* Actions */
export const useHotelsActions = () => ({
  ...bindActionCreators({
    setHotels,
    setRooms,
    setCitiesOptions,
    setBookings,
  }, useAppDispatch()),
})
