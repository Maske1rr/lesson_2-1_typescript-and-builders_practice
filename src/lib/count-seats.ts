// Б2: перенесите сюда countSeats, импортируйте Booking через import type.
import type { Booking } from '../models/booking'

export function countSeats(items: Booking[]): number {
  let sum = 0
  items.forEach((booking) => {
    sum += booking.seats
  })
  return sum
}
