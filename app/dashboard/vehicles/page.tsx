import { VehicleFilters } from "@/components/vehicles/vehicle-filters"
import { VehicleList } from "@/components/vehicles/vehicle-list"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"

export default function VehiclesPage() {
  return (
    <div className="flex flex-col gap-5 p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Vehicles</h1>
          <p className="text-muted-foreground">Manage your fleet of vehicles</p>
        </div>
        <Button asChild>
          <Link href="/dashboard/vehicles/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Vehicle
          </Link>
        </Button>
      </div>
      <VehicleFilters />
      <VehicleList />
    </div>
  )
}
