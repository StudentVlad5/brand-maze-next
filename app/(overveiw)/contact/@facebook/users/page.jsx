"use client"
import { Suspense } from 'react';

export default function Users () { 
    return <div style={{width:"100%", textAlign:"center"}}><Suspense fallback={<div>SCELETON LIST OF USERS</div>}><h1>LIST OF USERS</h1></Suspense></div> }