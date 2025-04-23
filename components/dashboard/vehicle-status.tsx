import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function VehicleStatus() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Vehicle Status</CardTitle>
        <CardDescription>Current status of your fleet</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <span>Available</span>
            </div>
            <span className="font-medium">24</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-blue-500"></div>
              <span>Rented</span>
            </div>
            <span className="font-medium">32</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <span>Maintenance</span>
            </div>
            <span className="font-medium">8</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <span>Out of Service</span>
            </div>
            <span className="font-medium">3</span>
          </div>
          <div className="mt-6 pt-4 border-t">
            <div className="flex items-center justify-between">
              <span className="font-medium">Total Fleet</span>
              <span className="font-bold">67</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
