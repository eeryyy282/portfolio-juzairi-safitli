import { useTranslation } from "react-i18next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Sparkles, FolderGit2 } from "lucide-react"

interface ProjectItem {
  id: string
  title: string
  category: string
  description: string
  tech: string[]
  github: string
  featured?: boolean
}

export function Projects() {
  const { t } = useTranslation()
  const items = t("projects.items", { returnObjects: true }) as ProjectItem[]

  return (
    <section id="projects" className="py-16 md:py-20 border-t border-border/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="space-y-2">
          <Badge variant="outline" className="text-xs uppercase tracking-wider">
            {t("projects.section_badge")}
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            {t("projects.title")}
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl">
            {t("projects.subtitle")}
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col justify-between border-border/80 bg-card/60 hover:bg-card hover:border-border hover:shadow-md transition-all duration-200 group"
            >
              <CardHeader className="space-y-3 pb-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1.5">
                    <FolderGit2 className="h-3.5 w-3.5" />
                    {project.category}
                  </span>
                  {project.featured && (
                    <Badge variant="secondary" className="gap-1 text-[11px] font-normal py-0">
                      <Sparkles className="h-3 w-3 text-amber-500" />
                      Featured
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm text-muted-foreground line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-2 space-y-4">
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((techItem) => (
                    <Badge
                      key={techItem}
                      variant="outline"
                      className="text-[11px] font-mono font-normal bg-muted/40 text-muted-foreground"
                    >
                      {techItem}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-2 border-t border-border/50">
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="h-8 gap-1.5 text-xs text-muted-foreground hover:text-foreground -ml-2"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>{t("projects.view_repo")}</span>
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-muted-foreground hover:text-foreground"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open project ${project.title}`}
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

