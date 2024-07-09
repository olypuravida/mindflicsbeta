import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { useDb } from '@/domain/db'
import {
  apiMiddleware,
  responseApiException,
  responseApiSuccess,
} from '@/domain/providers/http'

export async function PATCH(req: NextRequest) {
  const { Booking } = await useDb()
  const res = NextResponse
  const params = await req.json()
  const { room: roomData } = params ?? {}

  try {
    await apiMiddleware(req, params, res, {
      only: ['PATCH'],
      permit: ['room'],
    })

    await Booking.update(roomData, {
      where: { id: roomData.id },
    })
    const room = await Booking.findByPk(roomData.id)

    return responseApiSuccess(res, {
      content: {
        message: 'Booking updated successfully!',
        data: room,
      },
    })
  } catch (exception) {
    console.error(exception)
    return responseApiException(res, exception)
  }
}
