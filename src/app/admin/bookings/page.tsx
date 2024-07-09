import React from 'react'
import { redirect } from 'next/navigation'

import { Content } from '@/app/containers/admin/content/Content'
import { BookingsList } from '@/app/features/bookings'
import { useSession } from '@/domain/hooks/cookies'

export default function Reservations() {
  const session = useSession()
  if (!session) return redirect('/auth/sign-in')

  return (
    <Content title="Bookings">
      <BookingsList />
    </Content>
  )
}
