import { PaymentFilters } from "@/components/payments/payment-filters"
import { PaymentList } from "@/components/payments/payment-list"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"

export default function PaymentsPage() {
  return (
    <div className="flex flex-col gap-5 p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Payments</h1>
          <p className="text-muted-foreground">Track all payment transactions</p>
        </div>
        <Button asChild>
          <Link href="/dashboard/payments/new">
            <Plus className="mr-2 h-4 w-4" />
            Record Payment
          </Link>
        </Button>
      </div>
      <PaymentFilters />
      <PaymentList />
    </div>
  )
}
