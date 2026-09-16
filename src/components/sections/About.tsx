import { useTranslation } from "react-i18next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Smartphone, Bot, Cpu } from "lucide-react"

export function About() {
  const { t } = useTranslation()

  const competencies = [
    {
      icon: Smartphone,
      title: "Android & Mobile",
      desc: "Native Kotlin, MVVM, Clean Architecture, Room DB, Coroutines, Jetpack Compose.",
    },
    {
      icon: Code2,
      title: "Full-stack Engineering",
      desc: "Vite, React, TypeScript, Node.js, Express, REST APIs, Tailwind CSS.",
    },
    {
      icon: Bot,
      title: "AI Integration",
      desc: "Google Gemini 1.5, multimodal prompting, WhatsApp API, document automation.",
    },
    {
      icon: Cpu,
      title: "Systems & Infrastructure",
      desc: "Linux server config, networking basics, Git CI/CD, database design.",
    },
  ]

  return (
    <section id="about" className="py-16 md:py-20 border-t border-border/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="space-y-2">
          <Badge variant="outline" className="text-xs uppercase tracking-wider">
            {t("about.section_badge")}
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            {t("about.title")}
          </h2>
        </div>

        {/* Narrative Paragraphs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
            <p>{t("about.p3")}</p>
          </div>

          {/* Quick Metrics / Stats */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-lg border border-border/80 bg-card/60">
              <p className="text-2xl sm:text-3xl font-bold text-foreground">3.95</p>
              <p className="text-xs text-muted-foreground mt-1 font-medium">{t("about.stat_gpa")}</p>
            </div>
            <div className="p-4 rounded-lg border border-border/80 bg-card/60">
              <p className="text-2xl sm:text-3xl font-bold text-foreground">Top 10%</p>
              <p className="text-xs text-muted-foreground mt-1 font-medium">Bangkit Distinction</p>
            </div>
            <div className="p-4 rounded-lg border border-border/80 bg-card/60">
              <p className="text-2xl sm:text-3xl font-bold text-foreground">20+</p>
              <p className="text-xs text-muted-foreground mt-1 font-medium">{t("about.stat_students")}</p>
            </div>
            <div className="p-4 rounded-lg border border-border/80 bg-card/60">
              <p className="text-2xl sm:text-3xl font-bold text-foreground">93%</p>
              <p className="text-xs text-muted-foreground mt-1 font-medium">Satisfaction Rate</p>
            </div>
          </div>
        </div>

        {/* Core Competencies Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {competencies.map((comp) => {
            const Icon = comp.icon
            return (
              <Card
                key={comp.title}
                className="bg-card/40 border-border/70 hover:border-border hover:bg-card/70 transition-colors"
              >
                <CardContent className="p-5 space-y-2">
                  <div className="h-8 w-8 rounded-md bg-secondary/80 flex items-center justify-center text-foreground">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-foreground tracking-tight">
                    {comp.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {comp.desc}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

