import { BookingFilters } from "@/components/bookings/booking-filters"
import { BookingList } from "@/components/bookings/booking-list"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"

export default function BookingsPage() {
  return (
    <div className="flex flex-col gap-5 p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Bookings</h1>
          <p className="text-muted-foreground">Manage all vehicle bookings</p>
        </div>
        <Button asChild>
          <Link href="/dashboard/bookings/new">
            <Plus className="mr-2 h-4 w-4" />
            New Booking
          </Link>
        </Button>
      </div>
      <BookingFilters />
      <BookingList />
    </div>
  )
}
