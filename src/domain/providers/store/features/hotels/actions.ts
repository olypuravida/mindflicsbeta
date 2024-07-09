'use client'

import { createAction } from '@reduxjs/toolkit'
import type { Booking } from '@/domain/db/features/Booking/model'
import type { Hotel } from '@/domain/db/features/Hotel/model'
import type { Room } from '@/domain/db/features/Room/model'

export const setHotels = createAction<Hotel[]>('@hotels/SET_HOTELS')
export const setRooms = createAction<Room[]>('@hotels/SET_ROOMS')
export const setCitiesOptions = createAction<{ label: string; id: number }[]>('@hotels/SET_CITIES_OPTIONS')
export const setBookings = createAction<Booking[]>('@hotels/SET_BOOKINGS')
