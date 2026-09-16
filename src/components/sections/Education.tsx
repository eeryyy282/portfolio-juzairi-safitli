import { useTranslation } from "react-i18next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, CheckCircle2 } from "lucide-react"

interface DegreeItem {
  degree: string
  institution: string
  period: string
  honors: string
  description: string
}

interface CertItem {
  name: string
  issuer: string
  date: string
}

export function Education() {
  const { t } = useTranslation()
  const degrees = t("education.degrees", { returnObjects: true }) as DegreeItem[]
  const certifications = t("education.certifications", { returnObjects: true }) as CertItem[]

  return (
    <section id="education" className="py-16 md:py-20 border-t border-border/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <Badge variant="outline" className="text-xs uppercase tracking-wider">
            {t("education.section_badge")}
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            {t("education.title")}
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl">
            {t("education.subtitle")}
          </p>
        </div>

        {/* 2 Column Layout: Degrees on Left, Certifications on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Degrees Column (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              {t("education.degrees_title")}
            </h3>

            <div className="space-y-4">
              {degrees.map((deg, index) => (
                <Card
                  key={index}
                  className="border-border/80 bg-card/60 hover:bg-card hover:border-border transition-colors shadow-sm"
                >
                  <CardContent className="p-5 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <h4 className="text-base font-semibold text-foreground">
                        {deg.degree}
                      </h4>
                      <span className="text-xs font-mono text-muted-foreground">
                        {deg.period}
                      </span>
                    </div>

                    <p className="text-sm font-medium text-muted-foreground">
                      {deg.institution}
                    </p>

                    <div className="pt-1">
                      <Badge variant="accent" className="text-xs font-medium text-primary">
                        {deg.honors}
                      </Badge>
                    </div>

                    <p className="text-xs sm:text-sm text-muted-foreground pt-1 leading-relaxed">
                      {deg.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <Award className="h-4 w-4" />
              {t("education.certifications_title")}
            </h3>

            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-border/70 bg-card/50 hover:bg-card/80 transition-colors flex items-start gap-3 shadow-sm"
                >
                  <div className="h-7 w-7 rounded-full bg-secondary/80 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div className="space-y-1">
                    <h5 className="text-sm font-medium text-foreground leading-snug">
                      {cert.name}
                    </h5>
                    <p className="text-xs text-muted-foreground">
                      {cert.issuer}
                    </p>
                    <span className="inline-block text-[11px] font-mono text-muted-foreground/80">
                      {cert.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

