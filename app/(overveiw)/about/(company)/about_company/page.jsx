"use client"
import  ClipLoaderSpinner  from './loading';
import { Suspense } from 'react';
import { usePathname } from 'next/navigation';

export default function Company() {
    const router = usePathname();
    return  <Suspense key={router} fallback={<ClipLoaderSpinner/>}><div style={{display:"flex", width:"100%", height:"100vh", justifyContent:"center",alignItems:"center"}}><h1>About COMPANY</h1></div></Suspense>
 }