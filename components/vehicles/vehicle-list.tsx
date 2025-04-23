import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, Edit, Trash2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function VehicleList() {
  const vehicles = [
    {
      id: "V-001",
      name: "Toyota Fortuner",
      type: "SUV",
      year: 2022,
      licensePlate: "KDD 123A",
      status: "Available",
      dailyRate: "KSh 8,000",
      image: "/placeholder.svg?height=100&width=180",
    },
    {
      id: "V-002",
      name: "Nissan X-Trail",
      type: "SUV",
      year: 2021,
      licensePlate: "KCY 456B",
      status: "Rented",
      dailyRate: "KSh 6,000",
      image: "/placeholder.svg?height=100&width=180",
    },
    {
      id: "V-003",
      name: "Toyota Prado",
      type: "SUV",
      year: 2023,
      licensePlate: "KDE 789C",
      status: "Rented",
      dailyRate: "KSh 10,000",
      image: "/placeholder.svg?height=100&width=180",
    },
    {
      id: "V-004",
      name: "Honda CRV",
      type: "SUV",
      year: 2022,
      licensePlate: "KDG 321D",
      status: "Available",
      dailyRate: "KSh 7,000",
      image: "/placeholder.svg?height=100&width=180",
    },
    {
      id: "V-005",
      name: "Suzuki Jimny",
      type: "SUV",
      year: 2021,
      licensePlate: "KCZ 654E",
      status: "Maintenance",
      dailyRate: "KSh 5,000",
      image: "/placeholder.svg?height=100&width=180",
    },
    {
      id: "V-006",
      name: "Toyota Corolla",
      type: "Sedan",
      year: 2022,
      licensePlate: "KDD 987F",
      status: "Available",
      dailyRate: "KSh 4,500",
      image: "/placeholder.svg?height=100&width=180",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {vehicles.map((vehicle) => (
        <Card key={vehicle.id} className="overflow-hidden">
          <div className="relative h-[150px] w-full bg-muted">
            <Image src={vehicle.image || "/placeholder.svg"} alt={vehicle.name} fill className="object-cover" />
            <Badge
              className={`absolute right-2 top-2 ${
                vehicle.status === "Available"
                  ? "bg-green-500"
                  : vehicle.status === "Rented"
                    ? "bg-blue-500"
                    : vehicle.status === "Maintenance"
                      ? "bg-yellow-500"
                      : "bg-red-500"
              }`}
            >
              {vehicle.status}
            </Badge>
          </div>
          <CardContent className="p-4">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="font-bold">{vehicle.name}</h3>
              <span className="text-sm font-medium">{vehicle.dailyRate}/day</span>
            </div>
            <div className="mb-4 grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="text-muted-foreground">Type:</span> {vehicle.type}
              </div>
              <div>
                <span className="text-muted-foreground">Year:</span> {vehicle.year}
              </div>
              <div className="col-span-2">
                <span className="text-muted-foreground">License:</span> {vehicle.licensePlate}
              </div>
            </div>
            <div className="flex justify-between gap-2">
              <Button asChild variant="outline" size="sm">
                <Link href={`/dashboard/vehicles/${vehicle.id}`}>
                  <Eye className="mr-1 h-4 w-4" />
                  View
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href={`/dashboard/vehicles/${vehicle.id}/edit`}>
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
