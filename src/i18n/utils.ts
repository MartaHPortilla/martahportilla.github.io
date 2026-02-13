import { labels } from "./ui";

const defaultLang = "es";

export function useTranslation(lang: keyof typeof labels) {
    return function translate(key: keyof typeof labels[typeof defaultLang]) {
        return labels[lang][key] || labels[defaultLang][key] || key;
    }
}
