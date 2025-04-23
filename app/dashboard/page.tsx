import { BookingStats } from "@/components/dashboard/booking-stats"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { RecentBookings } from "@/components/dashboard/recent-bookings"
import { RevenueChart } from "@/components/dashboard/revenue-chart"
import { VehicleStatus } from "@/components/dashboard/vehicle-status"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-5 p-6">
      <DashboardHeader />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        <BookingStats />
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <div className="md:col-span-2">
          <RevenueChart />
        </div>
        <div>
          <VehicleStatus />
        </div>
      </div>
      <div>
        <RecentBookings />
      </div>
    </div>
  )
}
