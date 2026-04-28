import { Lock } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/50 px-4 py-6 sm:py-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary sm:h-8 sm:w-8">
              <Lock className="h-3.5 w-3.5 text-primary-foreground sm:h-4 sm:w-4" />
            </div>
            <span className="text-sm font-bold sm:text-base">
              SD<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">LOCK</span>
            </span>
          </div>
          
          <p className="hidden font-mono text-[10px] text-muted-foreground sm:block sm:text-xs">
            TEACHER ID ACCESS · CLASSROOM SAFETY · OPEN-DOOR RECORDS
          </p>
          
          <p className="text-xs text-muted-foreground sm:text-sm">
            © 2026 SDLOCK. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
