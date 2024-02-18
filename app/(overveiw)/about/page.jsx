"use client"
import  ClipLoaderSpinner  from '../../loading';
import { Suspense } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link'

export default function About() {
    const router = usePathname();
    function getRendomInt (count){
        return Math.floor(Math.random()*count)
    }
    const random = getRendomInt(2);
    if(random === 1){
        throw new Error("Error on page About")
    }
    return <div style={{width:"100%", paddingTop:"60px", textAlign:"center"}}>
                <Suspense key={router} fallback={<ClipLoaderSpinner/>}>
                    <h1>About</h1>
                    <Link style={{margin:'40px'}}href="about/about_company">About Company</Link>
                    <Link href="about/about_team">About Team</Link>
                </Suspense>
                </div> }