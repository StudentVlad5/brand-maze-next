"use client"
import  ClipLoaderSpinner  from '../../loading';
import { Suspense } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function Contact() { 
    const router = usePathname();
    const rout = useRouter();
    function getRendomInt (count){
        return Math.floor(Math.random()*count)
    }
    const random = getRendomInt(2);
    if(random === 1){
        throw new Error("Error on page Contact");
    }
    if(random !== 1){
            // redirect('about/');
            setTimeout(()=>{rout.push('about/')},2000);
    }
    return <div style={{width:"100%", paddingTop:"60px", textAlign:"center"}}><Suspense key={router} fallback={<ClipLoaderSpinner/>}><h1>Contact</h1></Suspense></div> }