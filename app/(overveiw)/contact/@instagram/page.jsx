"use client"
import { Suspense } from 'react';

const Instagram = () => { 
    return <div style={{width:"100%", textAlign:"center"}}><Suspense fallback={<div>SCELETON Instagram</div>}><h1>There our contacts in Instagram</h1></Suspense></div> }

export default Instagram