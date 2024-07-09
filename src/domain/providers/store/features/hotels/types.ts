import type { Booking } from '@/domain/db/features/Booking/model'
import type { Hotel } from '@/domain/db/features/Hotel/model'
import type { Room } from '@/domain/db/features/Room/model'

export interface HotelsState {
  bookings: Booking[]
  citiesOptions: { label: string; id: number }[]
  hotels: Hotel[]
  rooms: Room[]
}
