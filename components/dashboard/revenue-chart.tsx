"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function RevenueChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue Overview</CardTitle>
        <CardDescription>Monthly revenue breakdown for the current year</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="monthly">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="quarterly">Quarterly</TabsTrigger>
              <TabsTrigger value="yearly">Yearly</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="monthly" className="space-y-4">
            <div className="h-[300px] w-full">
              <div className="flex h-full w-full flex-col justify-end gap-2">
                <div className="flex items-end gap-2 pb-6 pt-10">
                  {/* Simulated chart bars */}
                  <div className="w-full">
                    <div className="flex items-end justify-between gap-2">
                      <div className="w-8 rounded-t bg-blue-600" style={{ height: "40px" }}></div>
                      <div className="w-8 rounded-t bg-blue-600" style={{ height: "60px" }}></div>
                      <div className="w-8 rounded-t bg-blue-600" style={{ height: "100px" }}></div>
                      <div className="w-8 rounded-t bg-blue-600" style={{ height: "80px" }}></div>
                      <div className="w-8 rounded-t bg-blue-600" style={{ height: "120px" }}></div>
                      <div className="w-8 rounded-t bg-blue-600" style={{ height: "180px" }}></div>
                      <div className="w-8 rounded-t bg-blue-600" style={{ height: "140px" }}></div>
                      <div className="w-8 rounded-t bg-blue-600" style={{ height: "160px" }}></div>
                      <div className="w-8 rounded-t bg-blue-600" style={{ height: "200px" }}></div>
                      <div className="w-8 rounded-t bg-blue-600" style={{ height: "170px" }}></div>
                      <div className="w-8 rounded-t bg-blue-600" style={{ height: "190px" }}></div>
                      <div className="w-8 rounded-t bg-navy-blue" style={{ height: "210px" }}></div>
                    </div>
                    <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                      <div>Jan</div>
                      <div>Feb</div>
                      <div>Mar</div>
                      <div>Apr</div>
                      <div>May</div>
                      <div>Jun</div>
                      <div>Jul</div>
                      <div>Aug</div>
                      <div>Sep</div>
                      <div>Oct</div>
                      <div>Nov</div>
                      <div>Dec</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="quarterly" className="space-y-4">
            <div className="h-[300px] w-full">
              <div className="flex h-full w-full flex-col justify-end gap-2">
                <div className="flex items-end gap-2 pb-6 pt-10">
                  {/* Simulated chart bars */}
                  <div className="w-full">
                    <div className="flex items-end justify-around gap-2">
                      <div className="w-16 rounded-t bg-blue-600" style={{ height: "100px" }}></div>
                      <div className="w-16 rounded-t bg-blue-600" style={{ height: "180px" }}></div>
                      <div className="w-16 rounded-t bg-blue-600" style={{ height: "160px" }}></div>
                      <div className="w-16 rounded-t bg-navy-blue" style={{ height: "210px" }}></div>
                    </div>
                    <div className="mt-2 flex justify-around text-xs text-muted-foreground">
                      <div>Q1</div>
                      <div>Q2</div>
                      <div>Q3</div>
                      <div>Q4</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="yearly" className="space-y-4">
            <div className="h-[300px] w-full">
              <div className="flex h-full w-full flex-col justify-end gap-2">
                <div className="flex items-end gap-2 pb-6 pt-10">
                  {/* Simulated chart bars */}
                  <div className="w-full">
                    <div className="flex items-end justify-around gap-2">
                      <div className="w-16 rounded-t bg-blue-600" style={{ height: "150px" }}></div>
                      <div className="w-16 rounded-t bg-blue-600" style={{ height: "180px" }}></div>
                      <div className="w-16 rounded-t bg-navy-blue" style={{ height: "210px" }}></div>
                    </div>
                    <div className="mt-2 flex justify-around text-xs text-muted-foreground">
                      <div>2022</div>
                      <div>2023</div>
                      <div>2024</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
