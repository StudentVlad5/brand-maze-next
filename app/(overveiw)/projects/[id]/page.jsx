"use client"
import {usePathname} from 'next/navigation';
export default function ProjectNumber() { 
    const location = usePathname();
    return <div style={{width:"100%", paddingTop:"60px", textAlign:"center"}}><h1>Project # {location.split('/').reverse()[0]}</h1></div> }