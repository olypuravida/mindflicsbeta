import type { WhereOptions } from 'sequelize'
import { useDb } from '../../client'
import type { BookingAttributes } from './types'

type Where = WhereOptions<BookingAttributes>

export const getBookings = async (where?: Where) => {
  const { Booking, Room, User } = await useDb()
  const include = [Room, User]
  const bookings = await Booking.findAll({ where, include })
  return bookings
}

export const getBooking = async (where: Where) => {
  const { Booking, State } = await useDb()
  const include = [State]
  const booking = await Booking.findOne({ where, include })
  return booking
}
