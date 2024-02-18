"use client"
import { Suspense } from 'react';

export default function Messages () { 
    return <div style={{width:"100%", textAlign:"center"}}><Suspense fallback={<div>SCELETON Messages</div>}><h1>User Messages</h1></Suspense></div> }
