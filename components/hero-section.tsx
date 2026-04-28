"use client"

import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Lock, Shield, Clock, FileText } from "lucide-react"

const DoorLockScene = dynamic(
  () => import("@/components/door-lock-scene").then((mod) => mod.DoorLockScene),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    ),
  }
)

const stats = [
  { value: "< 1s", label: "ID Tap Access" },
  { value: "0 min", label: "Maintenance Wait" },
  { value: "100%", label: "Event Logged" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(30_20%_90%/0.5)_1px,transparent_1px),linear-gradient(to_bottom,hsl(30_20%_90%/0.5)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Gradient Orb */}
      <div className="absolute right-0 top-0 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/3 rounded-full bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent blur-3xl" />

      <div className="container relative mx-auto flex min-h-screen flex-col gap-8 px-4 pb-12 pt-24 md:pt-28 lg:grid lg:grid-cols-2 lg:gap-12 lg:py-0">
        {/* Left Column - Content */}
        <div className="flex flex-col justify-center space-y-6 text-center lg:space-y-8 lg:text-left">
          <Badge variant="outline" className="mx-auto w-fit border-primary/30 bg-primary/5 text-foreground lg:mx-0">
            <Lock className="mr-2 h-3 w-3" />
            <span className="hidden sm:inline">SDLOCK SCHOOL ACCESS · </span>TEACHER ID READY
          </Badge>

          <div className="space-y-4">
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Safer
              </span>{" "}
              classrooms.
            </h1>
            <p className="mx-auto max-w-lg text-base text-muted-foreground sm:text-lg lg:mx-0">
              Teachers tap their school ID to unlock classroom doors instantly. Live presence status, 
              complete access logs, and zero maintenance wait times.
            </p>
          </div>

          <div className="mx-auto flex flex-col items-center gap-4 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 sm:flex-row lg:mx-0">
            <div>
              <p className="text-sm text-muted-foreground">Complete System</p>
              <p className="text-2xl font-bold text-foreground sm:text-3xl">
                <span className="text-primary">₱2,700</span>
                <span className="ml-2 text-sm font-normal text-muted-foreground">only</span>
              </p>
            </div>
            <div className="hidden h-12 w-px bg-border sm:block" />
            <div className="flex flex-wrap justify-center gap-3">
              <Button size="default" className="bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 sm:size-lg">
                Buy Now
              </Button>
              <Button size="default" variant="outline" className="border-primary/30 hover:bg-primary/5 sm:size-lg">
                Book Demo
              </Button>
            </div>
          </div>

          <div className="flex justify-center gap-6 pt-4 sm:gap-8 lg:justify-start">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <p className="font-mono text-xl font-bold text-foreground sm:text-2xl">{stat.value}</p>
                <p className="text-xs text-muted-foreground sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - 3D Model */}
        <div className="relative order-first flex items-center justify-center lg:order-last lg:h-screen">
          {/* Glow Effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-48 w-48 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 blur-3xl sm:h-64 sm:w-64 lg:h-80 lg:w-80" />
          </div>
          
          <div className="relative h-[280px] w-full sm:h-[350px] md:h-[400px] lg:h-[600px]">
            <DoorLockScene />
          </div>
        </div>
      </div>
    </section>
  )
}
