"use client"
import Template from "../../template";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function RootLayout({ children }) {
  const location = usePathname();
  const data = [
    {
      name: "project 1",
      id: 1,
    },
    {
      name: "project 2",
      id: 2,
    },
    {
      name: "project 3",
      id: 3,
    },
    {
      name: "project 4",
      id: 4,
    },
    {
      name: "project 5",
      id: 5,
    },
];
  return (
      <div style={{width:"100%", height:"100%",textAlign:"center"}}>
        <div style={{width:"100%", paddingTop:"60px", textAlign:"center"}}><h1>Projects</h1>
            <ul>
                {data.map(it=><li key={it.id} className='linkOfProject'><Link href={'/projects/'+ it.id} aria-label={'project #' + it.id}>{'Project # ' + it.id}</Link></li>)}
            </ul>
            </div>
            <Template key={location}>
               {children}
            </Template>
      </div>
  );
};