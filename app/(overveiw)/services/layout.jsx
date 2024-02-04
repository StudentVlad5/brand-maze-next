"use client"
import Template from "../../template";
import {usePathname} from 'next/navigation';
import Link from 'next/link'

export default function RootLayout({ children }) {
  const location = usePathname();
  const data = [
    {
      name: "service 1",
      id: 1,
    },
    {
      name: "service 2",
      id: 2,
    },
    {
      name: "service 3",
      id: 3,
    },
    {
      name: "service 4",
      id: 4,
    },
    {
      name: "service 5",
      id: 5,
    },
];
  return (
      <div style={{width:"100%", height:"100%",textAlign:"center"}}>
        <div style={{width:"100%", paddingTop:"60px", textAlign:"center"}}><h1>Services</h1>
            <ul>
                {data.map(it=><li key={it.id} className='linkOfServices'><Link href={'/services/'+ it.id} aria-label={'service #' + it.id}>{'Service # ' + it.id}</Link></li>)}
            </ul>
            </div>
            <Template key={location}>
               {children}
            </Template>
      </div>
  );
};