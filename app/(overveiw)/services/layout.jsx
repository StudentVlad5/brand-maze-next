"use client"
import Template from "../../template";
import {usePathname} from 'next/navigation';
import Link from 'next/link'

export default function RootLayout({ children }) {
  const location = usePathname();
  return (
      <div style={{width:"100%", height:"100%",textAlign:"center"}}>
        <div style={{width:"100%", paddingTop:"60px", textAlign:"center"}}><h1>Services</h1>
            <ul>
                <li className='linkOfServices'><Link href="/services/1" aria-label='services #1'>Service #1</Link></li>
                <li className='linkOfServices'><Link href="/services/2" aria-label='services #2'>Service #2</Link></li>
                <li className='linkOfServices'><Link href="/services/3" aria-label='services #3'>Service #3</Link></li>
                <li className='linkOfServices'><Link href="/services/4" aria-label='services #4'>Service #4</Link></li>
                <li className='linkOfServices'><Link href="/services/5" aria-label='services #5'>Service #5</Link></li>
            </ul>
            </div>
            <Template key={location}>
               {children}
            </Template>
      </div>
  );
};