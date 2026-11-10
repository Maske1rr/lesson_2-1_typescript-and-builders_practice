// Б2: перенесите сюда BookingStatus и Booking. Экспортируйте оба типа.
export type BookingStatus = 'new' | 'confirmed'

export interface Booking {
  id: string
  name: string
  seats: number
  status: BookingStatus
  source: 'web'
}
