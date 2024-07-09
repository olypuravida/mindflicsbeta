import type { WhereOptions } from 'sequelize'
import { useDb } from '../../client'
import type { HotelAttributes } from './types'

type Where = WhereOptions<HotelAttributes>

export const getHotels = async (where?: Where) => {
  const { Hotel, Room, Review, City, State, Country } = await useDb()
  const include = [Room, Review, City, State, Country]
  const hotels = await Hotel.findAll({ where, include })
  return hotels
}

export const getHotel = async (where: Where) => {
  const { Hotel } = await useDb()
  const hotel = await Hotel.findOne({ where })
  return hotel
}
