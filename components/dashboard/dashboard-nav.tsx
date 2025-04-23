"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Car, Users, Calendar, CreditCard, BarChart3 } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: BarChart3,
  },
  {
    title: "Vehicles",
    href: "/dashboard/vehicles",
    icon: Car,
  },
  {
    title: "Customers",
    href: "/dashboard/customers",
    icon: Users,
  },
  {
    title: "Bookings",
    href: "/dashboard/bookings",
    icon: Calendar,
  },
  {
    title: "Payments",
    href: "/dashboard/payments",
    icon: CreditCard,
  },
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <nav className="grid items-start gap-2 p-4">
      {navItems.map((item) => {
        const isActive = pathname === item.href
        return (
          <Button
            key={item.href}
            asChild
            variant={isActive ? "default" : "ghost"}
            className={cn("justify-start", isActive ? "bg-navy-blue text-white" : "text-muted-foreground")}
          >
            <Link href={item.href}>
              <item.icon className="mr-2 h-4 w-4" />
              {item.title}
            </Link>
          </Button>
        )
      })}
    </nav>
  )
}
