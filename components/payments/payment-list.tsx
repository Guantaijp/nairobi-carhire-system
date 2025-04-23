import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Download, CreditCard } from "lucide-react"
import Link from "next/link"

export function PaymentList() {
  const payments = [
    {
      id: "P-2405-001",
      customer: {
        name: "John Kamau",
        email: "john.kamau@example.com",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "JK",
      },
      bookingId: "B-2405-001",
      date: "24 May 2024",
      method: "M-Pesa",
      status: "Completed",
      amount: "KSh 28,000",
    },
    {
      id: "P-2405-002",
      customer: {
        name: "Sarah Wanjiku",
        email: "sarah.w@example.com",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "SW",
      },
      bookingId: "B-2405-002",
      date: "25 May 2024",
      method: "Credit Card",
      status: "Pending",
      amount: "KSh 12,000",
    },
    {
      id: "P-2405-003",
      customer: {
        name: "David Ochieng",
        email: "david.o@example.com",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "DO",
      },
      bookingId: "B-2405-003",
      date: "22 May 2024",
      method: "Bank Transfer",
      status: "Completed",
      amount: "KSh 35,000",
    },
    {
      id: "P-2405-004",
      customer: {
        name: "Mary Njeri",
        email: "mary.n@example.com",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "MN",
      },
      bookingId: "B-2405-004",
      date: "26 May 2024",
      method: "M-Pesa",
      status: "Pending",
      amount: "KSh 18,000",
    },
    {
      id: "P-2405-005",
      customer: {
        name: "James Mwangi",
        email: "james.m@example.com",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "JM",
      },
      bookingId: "B-2405-005",
      date: "20 May 2024",
      method: "Cash",
      status: "Completed",
      amount: "KSh 25,000",
    },
    {
      id: "P-2405-006",
      customer: {
        name: "Lucy Akinyi",
        email: "lucy.a@example.com",
        avatar: "/placeholder.svg?height=32&width=32",
        initials: "LA",
      },
      bookingId: "B-2405-006",
      date: "18 May 2024",
      method: "Credit Card",
      status: "Failed",
      amount: "KSh 13,500",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {payments.map((payment) => (
        <Card key={payment.id}>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <Badge
                variant="outline"
                className={
                  payment.status === "Completed"
                    ? "border-green-500 bg-green-50 text-green-700"
                    : payment.status === "Pending"
                      ? "border-yellow-500 bg-yellow-50 text-yellow-700"
                      : payment.status === "Failed"
                        ? "border-red-500 bg-red-50 text-red-700"
                        : "border-blue-500 bg-blue-50 text-blue-700"
                }
              >
                {payment.status}
              </Badge>
              <span className="text-sm font-medium">{payment.amount}</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src={payment.customer.avatar || "/placeholder.svg"} alt={payment.customer.name} />
                <AvatarFallback>{payment.customer.initials}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-base">{payment.customer.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{payment.customer.email}</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-2 text-sm">
              <div className="flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-muted-foreground" />
                <span>{payment.method}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Date:</span> {payment.date}
              </div>
              <div>
                <span className="text-muted-foreground">Booking ID:</span> {payment.bookingId}
              </div>
            </div>
            <div className="mt-4 flex justify-between gap-2">
              <Button asChild variant="outline" size="sm">
                <Link href={`/dashboard/payments/${payment.id}`}>
                  <Eye className="mr-1 h-4 w-4" />
                  View
                </Link>
              </Button>
              <Button variant="outline" size="sm">
                <Download className="mr-1 h-4 w-4" />
                Receipt
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
