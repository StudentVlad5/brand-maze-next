import "server-only"

export function getDictionary (lang) {
    if(lang='en'){import ('./en.json')};
    if(lang='uk'){import ('./uk.json')};
    if(lang='fr'){import ('./fr.json')};
}