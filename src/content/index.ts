import { siteContent as idContent } from "./id";
import { siteContent as enContent } from "./en";
import { PortfolioContent } from "./types";

export type Locale = "en" | "id";

export const defaultLocale: Locale = "en";

export const contentMap: Record<Locale, PortfolioContent> = {
  en: enContent,
  id: idContent,
};

// Default siteContent for SSR / Metadata
export const siteContent: PortfolioContent = enContent;
export { idContent, enContent };
export * from "./types";
