import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { getBookings, getBooking } from '@/domain/db/features/Booking'
import {
  NotFoundException,
  apiMiddleware,
  responseApiException,
  responseApiSuccess,
} from '@/domain/providers/http'

export async function GET(req: NextRequest) {
  const res = NextResponse
  const params = Object.fromEntries(
    req.nextUrl.searchParams.entries()
  )

  try {
    await apiMiddleware(req, params, res, {
      only: ['GET'],
      permit: ['id', 'roomId', 'userId'],
    })

    const { id, roomId, userId } = params
    let data: any = null

    if (id && !roomId) {
      data = await getBooking({ id: Number(id) })
    } else if (id && roomId && !userId) {
      data = await getBooking({
        id: Number(id),
        roomId: Number(roomId),
      })
    } else if (id && roomId && userId) {
      data = await getBooking({
        id: Number(id),
        roomId: Number(roomId),
        userId: Number(userId),
      })
    } else if (!id && roomId && userId) {
      data = await getBookings({
        roomId: Number(roomId),
        userId: Number(userId),
      })
    } else if (!id && roomId && !userId) {
      data = await getBookings({ roomId: Number(roomId) })
    } else if (!id && !roomId && userId) {
      data = await getBookings({ userId: Number(userId) })
    } else {
      data = await getBookings()
    }

    if (!data) { throw new NotFoundException() }
    const isPlural = data instanceof Array

    return responseApiSuccess(res, {
      content: {
        message: `Get ${!isPlural ? 'booking' : 'bookings'} successfully!`,
        data,
      },
    })
  } catch (exception) {
    console.error(exception)
    return responseApiException(res, exception)
  }
}
