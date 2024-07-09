import type { ModalProps } from '@mui/material'
import type { BookingAttributes } from '@/domain/db/features/Booking/types'

export interface BookingModalProps extends Omit<ModalProps, 'children' | 'onSubmit'> {
  booking?: BookingAttributes | null
  mode: 'view' | 'edit' | 'add'
  onSubmit?: (data: BookingAttributes) => void
}
