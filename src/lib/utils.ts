import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getLang(locale?: string): "es" | "en" {
  if (locale?.startsWith("en")) return "en";
  return "es";
}


export function formatDate(
  date: Date,
  lang: "es" | "en" = "en"
) {

  const locale = lang === "es" ? "es-ES" : "en-GB";

  return new Intl.DateTimeFormat(locale, {
    month: "short",
    day: "2-digit",
    year: "numeric"
  }).format(date);
}

export function readingTime(
  html: string, 
  lang: "es" | "en" = "en"
): string {
    const textOnly = html.replace(/<[^>]+>/g, "");
    const wordCount = textOnly.split(/\s+/).length;
    const readingTimeMinutes = ((wordCount / 200) + 1).toFixed();
    return lang === "es"
      ? `${readingTimeMinutes} min de lectura`
      : `${readingTimeMinutes} min read`;
  }

export function dateRange(
  startDate: Date,
  endDate: Date | undefined,
  lang: "es" | "en"
): string {
  const locale = lang === "es" ? "es-ES" : "en-GB";

  const formatter = new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "short",
  });

  const start = formatter.format(startDate);

  if (!endDate) {
    return lang === "es"
      ? `${start} – Actualidad`
      : `${start} – Present`;
  }

  const end = formatter.format(endDate);
  return `${start} – ${end}`;
}
