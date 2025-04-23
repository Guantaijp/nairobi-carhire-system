import type React from "react"
import { DashboardNav } from "@/components/dashboard/dashboard-nav"
import { MobileNav } from "@/components/dashboard/mobile-nav"
import { UserNav } from "@/components/dashboard/user-nav"
import { ThemeProvider } from "@/components/theme-provider"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-40 border-b bg-white dark:bg-gray-950">
          <div className="flex h-16 items-center justify-between px-4 md:px-6">
            <MobileNav />
            <div className="hidden md:flex">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-navy-blue text-white">
                  <span className="font-bold">NC</span>
                </div>
                <span className="text-lg font-bold text-navy-blue">Nairobi CarHire</span>
              </div>
            </div>
            <UserNav />
          </div>
        </header>
        <div className="flex flex-1">
          <aside className="hidden w-64 border-r bg-gray-100/40 dark:bg-gray-900/40 md:block">
            <DashboardNav />
          </aside>
          <main className="flex-1 bg-white dark:bg-gray-950">{children}</main>
        </div>
      </div>
    </ThemeProvider>
  )
}
