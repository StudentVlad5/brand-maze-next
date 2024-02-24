import "server-only"

const dictionaries = {
    en: () => import ('./en.json'),
    uk: () => import ('./uk.json'),
    fr: () => import ('./fr.json'),
}