import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"

export function LanguageToggle() {
  const { i18n } = useTranslation()

  const currentLang = i18n.language?.startsWith("id") ? "id" : "en"

  const toggleLanguage = () => {
    const nextLang = currentLang === "en" ? "id" : "en"
    i18n.changeLanguage(nextLang)
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      aria-label="Toggle language (EN / ID)"
      className="h-8 px-2.5 text-xs font-semibold tracking-wider transition-colors hover:bg-accent"
    >
      <span className={currentLang === "en" ? "text-foreground font-bold" : "text-muted-foreground"}>
        EN
      </span>
      <span className="mx-1 text-muted-foreground/40">|</span>
      <span className={currentLang === "id" ? "text-foreground font-bold" : "text-muted-foreground"}>
        ID
      </span>
    </Button>
  )
}

