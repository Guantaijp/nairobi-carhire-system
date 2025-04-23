import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Edit, Trash2, Car } from "lucide-react"
import Link from "next/link"

export function BookingList() {
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
    {
      id: "B-2405-006",
      customer: {
        name: "Lucy Akinyi",
        email: "lucy.a@example.com",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "LA",
      },
      vehicle: "Toyota Corolla",
      startDate: "18 May 2024",
      endDate: "21 May 2024",
      status: "Completed",
      amount: "KSh 13,500",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {bookings.map((booking) => (
        <Card key={booking.id}>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <Badge
                variant="outline"
                className={
                  booking.status === "Active"
                    ? "border-green-500 bg-green-50 text-green-700"
                    : booking.status === "Upcoming"
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : booking.status === "Completed"
                        ? "border-gray-500 bg-gray-50 text-gray-700"
                        : "border-red-500 bg-red-50 text-red-700"
                }
              >
                {booking.status}
              </Badge>
              <span className="text-sm font-medium">{booking.amount}</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src={booking.customer.avatar || "/placeholder.svg"} alt={booking.customer.name} />
                <AvatarFallback>{booking.customer.initials}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-base">{booking.customer.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{booking.customer.email}</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-2 text-sm">
              <div className="flex items-center gap-2">
                <Car className="h-4 w-4 text-muted-foreground" />
                <span>{booking.vehicle}</span>
              </div>
              <div>
                <span className="text-muted-foreground">From:</span> {booking.startDate}
              </div>
              <div>
                <span className="text-muted-foreground">To:</span> {booking.endDate}
              </div>
            </div>
            <div className="mt-4 flex justify-between gap-2">
              <Button asChild variant="outline" size="sm">
                <Link href={`/dashboard/bookings/${booking.id}`}>
                  <Eye className="mr-1 h-4 w-4" />
                  View
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href={`/dashboard/bookings/${booking.id}/edit`}>
                  <Edit className="mr-1 h-4 w-4" />
                  Edit
                </Link>
              </Button>
              <Button variant="outline" size="sm" className="text-red-500 hover:text-red-600">
                <Trash2 className="mr-1 h-4 w-4" />
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
