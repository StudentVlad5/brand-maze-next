"use client"
import {usePathname} from 'next/navigation';
export default function Project() { 
    const location = usePathname();
    return <div style={{width:"100%", paddingTop:"60px", textAlign:"center"}}><h1>Projects</h1>
    <ul>
        <li className='linkOfProject'><a href="/projects/1" aria-label='projects #1'>Projects #1</a></li>
        <li className='linkOfProject'><a href="/projects/2" aria-label='projects #2'>Projects #2</a></li>
        <li className='linkOfProject'><a href="/projects/3" aria-label='projects #3'>Projects #3</a></li>
        <li className='linkOfProject'><a href="/projects/4" aria-label='projects #4'>Projects #4</a></li>
        <li className='linkOfProject'><a href="/projects/5" aria-label='projects #5'>Projects #5</a></li>
    </ul>
    </div> }