"use client"
import { Suspense } from 'react';

const Telegram = () => { 
    return <div style={{width:"100%", textAlign:"center"}}><Suspense fallback={<div>SCELETON Telegram</div>}><h1>There are our contacts in Telegram</h1></Suspense></div> }

export default Telegram