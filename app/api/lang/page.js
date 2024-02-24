import { getDictionary } from "../dictionaries/dictionaries";

export default async function Page ({params:{lang}}){
    const dict = getDictionary(lang);
    return <button>{dict}</button>
}