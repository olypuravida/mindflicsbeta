'use client'

import { createSlice } from '@reduxjs/toolkit'
import persistReducer from 'redux-persist/es/persistReducer'
import storage from 'redux-persist/lib/storage'

import {
  setBookings,
  setCitiesOptions,
  setHotels,
  setRooms,
} from './actions'
import type { HotelsState } from './types'

const initialState: HotelsState = {
  bookings: [],
  citiesOptions: [],
  hotels: [],
  rooms: [],
}

const persistConfig = {
  blacklist: [],
  key: 'hotels',
  storage,
  version: 1,
}

export const hotelsSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(setHotels, (state, { payload }) => ({
      ...state,
      hotels: payload,
    }))

    addCase(setRooms, (state, { payload }) => ({
      ...state,
      rooms: payload,
    }))

    addCase(setCitiesOptions, (state, { payload }) => ({
      ...state,
      citiesOptions: payload,
    }))

    addCase(setBookings, (state, { payload }) => ({
      ...state,
      bookings: payload,
    }))
  },
})

export const hotelsReducer = persistReducer<HotelsState>(persistConfig, hotelsSlice.reducer)
