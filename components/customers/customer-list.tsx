import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Edit, Trash2, Car } from "lucide-react"
import Link from "next/link"

export function CustomerList() {
  const customers = [
    {
      id: "C-001",
      name: "John Kamau",
      email: "john.kamau@example.com",
      phone: "+254 712 345 678",
      idNumber: "12345678",
      status: "Active",
      totalBookings: 5,
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "JK",
    },
    {
      id: "C-002",
      name: "Sarah Wanjiku",
      email: "sarah.w@example.com",
      phone: "+254 723 456 789",
      idNumber: "23456789",
      status: "Active",
      totalBookings: 3,
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "SW",
    },
    {
      id: "C-003",
      name: "David Ochieng",
      email: "david.o@example.com",
      phone: "+254 734 567 890",
      idNumber: "34567890",
      status: "Active",
      totalBookings: 7,
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "DO",
    },
    {
      id: "C-004",
      name: "Mary Njeri",
      email: "mary.n@example.com",
      phone: "+254 745 678 901",
      idNumber: "45678901",
      status: "Inactive",
      totalBookings: 2,
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "MN",
    },
    {
      id: "C-005",
      name: "James Mwangi",
      email: "james.m@example.com",
      phone: "+254 756 789 012",
      idNumber: "56789012",
      status: "Active",
      totalBookings: 4,
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "JM",
    },
    {
      id: "C-006",
      name: "Lucy Akinyi",
      email: "lucy.a@example.com",
      phone: "+254 767 890 123",
      idNumber: "67890123",
      status: "Active",
      totalBookings: 1,
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "LA",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {customers.map((customer) => (
        <Card key={customer.id}>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <Badge
                variant="outline"
                className={
                  customer.status === "Active"
                    ? "border-green-500 bg-green-50 text-green-700"
                    : "border-gray-500 bg-gray-50 text-gray-700"
                }
              >
                {customer.status}
              </Badge>
              <div className="flex items-center gap-1">
                <Car className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{customer.totalBookings} bookings</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={customer.avatar || "/placeholder.svg"} alt={customer.name} />
                <AvatarFallback>{customer.initials}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-base">{customer.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{customer.email}</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-2 text-sm">
              <div>
                <span className="text-muted-foreground">Phone:</span> {customer.phone}
              </div>
              <div>
                <span className="text-muted-foreground">ID Number:</span> {customer.idNumber}
              </div>
            </div>
            <div className="mt-4 flex justify-between gap-2">
              <Button asChild variant="outline" size="sm">
                <Link href={`/dashboard/customers/${customer.id}`}>
                  <Eye className="mr-1 h-4 w-4" />
                  View
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href={`/dashboard/customers/${customer.id}/edit`}>
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
