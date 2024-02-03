"use client"
import Template from "../../template";
import {usePathname} from 'next/navigation';

export default function RootLayout({ children }) {
  const location = usePathname();
  return (
      <div style={{width:"100%", height:"100%",textAlign:"center"}}>
        <div style={{width:"100%", paddingTop:"60px", textAlign:"center"}}><h1>Projects</h1>
            <ul>
                <li className='linkOfProject'><a href="/projects/1" aria-label='projects #1'>Project #1</a></li>
                <li className='linkOfProject'><a href="/projects/2" aria-label='projects #2'>Project #2</a></li>
                <li className='linkOfProject'><a href="/projects/3" aria-label='projects #3'>Project #3</a></li>
                <li className='linkOfProject'><a href="/projects/4" aria-label='projects #4'>Project #4</a></li>
                <li className='linkOfProject'><a href="/projects/5" aria-label='projects #5'>Project #5</a></li>
            </ul>
            </div>
            <Template key={location}>
               {children}
            </Template>
      </div>
  );
};