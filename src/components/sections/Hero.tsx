import { useTranslation } from "react-i18next"
import { Download, Mail, Github, Linkedin, Award, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Hero() {
  const { t } = useTranslation()

  return (
    <section className="py-16 md:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-12">
        {/* Left Column: Bio & Action */}
        <div className="flex-1 text-center md:text-left space-y-5">
          {/* Subtle Badges */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-1">
            <Badge variant="accent" className="gap-1.5 py-1 text-xs font-normal border-border/80">
              <GraduationCap className="h-3.5 w-3.5 text-muted-foreground" />
              <span>{t("hero.badge_best_graduate")}</span>
            </Badge>
            <Badge variant="accent" className="gap-1.5 py-1 text-xs font-normal border-border/80">
              <Award className="h-3.5 w-3.5 text-muted-foreground" />
              <span>{t("hero.badge_bangkit")}</span>
            </Badge>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">
              {t("hero.greeting")}
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
              {t("hero.name")}
            </h1>
            <p className="text-lg sm:text-xl font-medium text-muted-foreground/90">
              {t("hero.title")}
            </p>
          </div>

          {/* Short tagline */}
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto md:mx-0 leading-relaxed">
            Building robust Android architectures, modern web systems, and intelligent AI-powered solutions with disciplined engineering.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
            <Button
              asChild
              size="default"
              className="gap-2 font-medium shadow-sm transition-transform active:scale-98"
            >
              <a
                href="./assets/cv-muhammad-juzairi-safitli.pdf"
                download="CV_Muhammad_Juzairi_Safitli.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="h-4 w-4" />
                <span>{t("hero.cta_cv")}</span>
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="default"
              className="gap-2 font-medium shadow-sm"
            >
              <a href="mailto:airiagustus82@gmail.com">
                <Mail className="h-4 w-4" />
                <span>{t("hero.cta_contact")}</span>
              </a>
            </Button>

            {/* Social Icons */}
            <div className="flex items-center gap-1.5 pl-1">
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="h-9 w-9 text-muted-foreground hover:text-foreground"
              >
                <a
                  href="https://github.com/MuhammadJuzairi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>

              <Button
                asChild
                variant="ghost"
                size="icon"
                className="h-9 w-9 text-muted-foreground hover:text-foreground"
              >
                <a
                  href="https://www.linkedin.com/in/muhammad-juzairi-safitli"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column: Profile Picture */}
        <div className="shrink-0 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-tr from-border via-muted to-accent opacity-75 blur-sm transition duration-500 group-hover:opacity-100" />
            <Avatar className="relative h-36 w-36 sm:h-44 sm:w-44 md:h-52 md:w-52 ring-4 ring-background shadow-md">
              <AvatarImage
                src="./assets/profile.jpg"
                alt="Muhammad Juzairi Safitli"
                className="object-cover"
              />
              <AvatarFallback className="text-2xl sm:text-3xl font-semibold bg-secondary text-foreground">
                JS
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </section>
  )
}

