import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section id="buy" className="px-4 py-16 sm:py-20 md:py-24">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/5 to-background p-6 sm:rounded-3xl sm:p-10 md:p-12 lg:p-16">
          {/* Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(30_20%_90%/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(30_20%_90%/0.3)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
          
          <div className="relative text-center">
            <h2 className="mb-4 text-balance text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
              Secure every{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                classroom
              </span>
              .
            </h2>
            <p className="mx-auto mb-6 max-w-xl text-sm text-muted-foreground sm:text-base">
              Join schools across the country using SDLOCK for safer, smarter access control.
            </p>
            <div className="mb-6 inline-flex flex-col items-center gap-1 rounded-full border border-primary/30 bg-background/80 px-4 py-2 backdrop-blur-sm sm:mb-8 sm:flex-row sm:gap-2 sm:px-6 sm:py-3">
              <span className="text-xs text-muted-foreground sm:text-sm">Complete system for only</span>
              <span className="text-xl font-bold text-primary sm:text-2xl">₱2,700</span>
            </div>
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <Button className="w-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 sm:w-auto sm:size-lg">
                Buy Now - ₱2,700
              </Button>
              <Button variant="outline" className="w-full border-primary/30 hover:bg-primary/5 sm:w-auto sm:size-lg">
                Book Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
