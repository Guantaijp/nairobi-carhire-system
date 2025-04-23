import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye } from "lucide-react"
import Link from "next/link"

export function RecentBookings() {
  const bookings = [
    {
      id: "B-2405-001",
      customer: {
        name: "John Kamau",
        email: "john.kamau@example.com",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "JK",
      },
      vehicle: "Toyota Fortuner",
      startDate: "24 May 2024",
      endDate: "28 May 2024",
      status: "Active",
      amount: "KSh 28,000",
    },
    {
      id: "B-2405-002",
      customer: {
        name: "Sarah Wanjiku",
        email: "sarah.w@example.com",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "SW",
      },
      vehicle: "Nissan X-Trail",
      startDate: "25 May 2024",
      endDate: "27 May 2024",
      status: "Upcoming",
      amount: "KSh 12,000",
    },
    {
      id: "B-2405-003",
      customer: {
        name: "David Ochieng",
        email: "david.o@example.com",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "DO",
      },
      vehicle: "Toyota Prado",
      startDate: "22 May 2024",
      endDate: "26 May 2024",
      status: "Active",
      amount: "KSh 35,000",
    },
    {
      id: "B-2405-004",
      customer: {
        name: "Mary Njeri",
        email: "mary.n@example.com",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "MN",
      },
      vehicle: "Honda CRV",
      startDate: "26 May 2024",
      endDate: "29 May 2024",
      status: "Upcoming",
      amount: "KSh 18,000",
    },
    {
      id: "B-2405-005",
      customer: {
        name: "James Mwangi",
        email: "james.m@example.com",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "JM",
      },
      vehicle: "Suzuki Jimny",
      startDate: "20 May 2024",
      endDate: "25 May 2024",
      status: "Completed",
      amount: "KSh 25,000",
    },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Recent Bookings</CardTitle>
          <CardDescription>Latest vehicle bookings and their status</CardDescription>
        </div>
        <Button asChild variant="outline" size="sm">
          <Link href="/dashboard/bookings">View All</Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          <div className="overflow-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-left text-sm font-medium text-muted-foreground">
                  <th className="pb-3">Booking</th>
                  <th className="pb-3">Customer</th>
                  <th className="pb-3">Vehicle</th>
                  <th className="pb-3">Dates</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Amount</th>
                  <th className="pb-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id} className="border-b text-sm">
                    <td className="py-3 font-medium">{booking.id}</td>
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage
                            src={booking.customer.avatar || "/placeholder.svg"}
                            alt={booking.customer.name}
                          />
                          <AvatarFallback>{booking.customer.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{booking.customer.name}</div>
                          <div className="text-xs text-muted-foreground">{booking.customer.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3">{booking.vehicle}</td>
                    <td className="py-3">
                      <div className="flex flex-col">
                        <span>{booking.startDate}</span>
                        <span className="text-xs text-muted-foreground">to {booking.endDate}</span>
                      </div>
                    </td>
                    <td className="py-3">
                      <Badge
                        variant="outline"
                        className={
                          booking.status === "Active"
                            ? "border-green-500 bg-green-50 text-green-700"
                            : booking.status === "Upcoming"
                              ? "border-blue-500 bg-blue-50 text-blue-700"
                              : "border-gray-500 bg-gray-50 text-gray-700"
                        }
                      >
                        {booking.status}
                      </Badge>
                    </td>
                    <td className="py-3 font-medium">{booking.amount}</td>
                    <td className="py-3 text-right">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                        <span className="sr-only">View details</span>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
