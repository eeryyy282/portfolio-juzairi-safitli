import { useTranslation } from "react-i18next"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"

interface ExperienceItem {
  role: string
  company: string
  period: string
  type: string
  description: string
  skills: string[]
}

export function Experience() {
  const { t } = useTranslation()
  const items = t("experience.items", { returnObjects: true }) as ExperienceItem[]

  return (
    <section id="experience" className="py-16 md:py-20 border-t border-border/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="space-y-2">
          <Badge variant="outline" className="text-xs uppercase tracking-wider">
            {t("experience.section_badge")}
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            {t("experience.title")}
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl">
            {t("experience.subtitle")}
          </p>
        </div>

        {/* Timeline / Card List */}
        <div className="relative pl-6 md:pl-8 border-l border-border/70 space-y-8">
          {items.map((item, index) => (
            <div key={index} className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-background border-2 border-primary group-hover:scale-110 transition-transform" />

              <div className="p-5 rounded-lg border border-border/70 bg-card/50 hover:bg-card/90 hover:border-border transition-all duration-200 shadow-sm space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="text-base font-semibold text-foreground tracking-tight flex items-center gap-2">
                      {item.role}
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground flex items-center gap-1.5 mt-0.5">
                      <Briefcase className="h-3.5 w-3.5" />
                      <span>{item.company}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1 sm:mt-0 font-mono">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{item.period}</span>
                    <span className="hidden sm:inline">•</span>
                    <Badge variant="secondary" className="text-[10px] px-2 py-0">
                      {item.type}
                    </Badge>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                {/* Skills used */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="text-[11px] font-normal text-muted-foreground/90 bg-muted/30"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

