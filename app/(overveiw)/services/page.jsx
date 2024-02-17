"use client"
import  ClipLoaderSpinner  from '../../loading';
import { Suspense } from 'react';
import {usePathname} from 'next/navigation';

export default function Services() { 
    const router = usePathname();
    return <div style={{width:"100%", paddingTop:"60px", textAlign:"center"}}><Suspense key={router} fallback={<ClipLoaderSpinner/>}><h1>Choose your service</h1></Suspense></div> }