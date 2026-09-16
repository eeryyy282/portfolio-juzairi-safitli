import { useTranslation } from "react-i18next"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, MapPin } from "lucide-react"

export function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="py-16 md:py-20 border-t border-border/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-border/80 bg-card/70 p-8 sm:p-10 shadow-sm space-y-8">
          <div className="space-y-2">
            <Badge variant="outline" className="text-xs uppercase tracking-wider">
              {t("contact.section_badge")}
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              {t("contact.title")}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
              {t("contact.subtitle")}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-2">
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2.5 text-muted-foreground">
                <Mail className="h-4 w-4 text-foreground" />
                <a
                  href="mailto:airiagustus82@gmail.com"
                  className="hover:text-foreground font-medium transition-colors"
                >
                  airiagustus82@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-muted-foreground">
                <MapPin className="h-4 w-4 text-foreground" />
                <span>{t("contact.location_value")}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button asChild size="default" className="shadow-sm gap-2">
                <a href="mailto:airiagustus82@gmail.com">
                  <Mail className="h-4 w-4" />
                  <span>{t("contact.send_email")}</span>
                </a>
              </Button>

              <Button asChild variant="outline" size="default" className="gap-2">
                <a
                  href="https://www.linkedin.com/in/muhammad-juzairi-safitli"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </Button>

              <Button asChild variant="outline" size="default" className="gap-2">
                <a
                  href="https://github.com/MuhammadJuzairi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

