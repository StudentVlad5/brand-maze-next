"use client"
import {usePathname} from 'next/navigation';
import  ClipLoaderSpinner  from '../../loading';
import { Suspense } from 'react';

export default function Project() { 
    const router = usePathname();
    return (<div style={{width:"100%", paddingTop:"60px", textAlign:"center"}}><Suspense key={router} fallback={<ClipLoaderSpinner/>}>
    <h2>Make you choice</h2></Suspense></div>) }