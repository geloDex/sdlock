import { Card, CardContent } from "@/components/ui/card"
import { 
  CreditCard, 
  Users, 
  ShieldCheck, 
  Zap, 
  ClipboardList, 
  Settings 
} from "lucide-react"

const features = [
  {
    icon: CreditCard,
    title: "Teacher ID Tap",
    description: "Open with your school ID or RFID card. No keys, no codes, just tap.",
  },
  {
    icon: Users,
    title: "Live Teacher Status",
    description: "See if teachers are inside, away, busy, or have locked the door.",
  },
  {
    icon: ShieldCheck,
    title: "Safer School Access",
    description: "Only approved teacher IDs can unlock. Full control over who enters.",
  },
  {
    icon: Zap,
    title: "No Maintenance Wait",
    description: "Instant unlock every time. No waiting for facilities to respond.",
  },
  {
    icon: ClipboardList,
    title: "Open-Door Records",
    description: "Every door open is logged: teacher name, ID, time, and classroom.",
  },
  {
    icon: Settings,
    title: "Admin Control",
    description: "Manage access permissions, view logs, and override in emergencies.",
  },
]

const steps = [
  { number: "01", title: "Tap teacher ID", description: "Hold your school ID card to the reader" },
  { number: "02", title: "Verify access", description: "System confirms teacher authorization" },
  { number: "03", title: "Open and record", description: "Door unlocks and event is logged" },
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative px-4 py-16 sm:py-20 md:py-24">
      <div className="container mx-auto">
        <div className="mb-10 text-center sm:mb-12 md:mb-16">
          <h2 className="mb-3 text-2xl font-bold tracking-tight sm:mb-4 sm:text-3xl md:text-4xl">
            Everything teachers need
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground sm:text-base">
            SDLOCK brings modern access control to every classroom, with features designed 
            specifically for schools.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {features.map((feature) => (
            <Card 
              key={feature.title} 
              className="group border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardContent className="p-4 sm:p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground sm:mb-4 sm:h-12 sm:w-12">
                  <feature.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="mb-1 text-sm font-semibold sm:mb-2 sm:text-base">{feature.title}</h3>
                <p className="text-xs text-muted-foreground sm:text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Access Flow */}
        <div className="mt-16 sm:mt-20 md:mt-24">
          <h3 className="mb-8 text-center text-xl font-bold sm:mb-10 sm:text-2xl md:mb-12">How It Works</h3>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.number} className="relative text-center">
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-6 hidden h-0.5 w-full bg-gradient-to-r from-primary/50 to-transparent sm:top-8 md:block" />
                )}
                <div className="relative mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary font-mono text-lg font-bold text-primary-foreground sm:mb-4 sm:h-16 sm:w-16 sm:text-xl">
                  {step.number}
                </div>
                <h4 className="mb-1 text-sm font-semibold sm:mb-2 sm:text-base">{step.title}</h4>
                <p className="text-xs text-muted-foreground sm:text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
