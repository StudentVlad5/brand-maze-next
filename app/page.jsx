"use client"
import  ClipLoaderSpinner  from './loading';
import { Suspense } from 'react';
import { usePathname } from 'next/navigation';

export default function Page () { 
    const router = usePathname();

    return <div style={{width:"100%", paddingTop:"60px", textAlign:"center"}}>
        <Suspense key={router} fallback={<ClipLoaderSpinner/>}>
            <h1>Hello, It's my HomePage!</h1>
        </Suspense></div>
   }