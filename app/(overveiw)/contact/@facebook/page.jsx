"use client"
import { Suspense } from 'react';
import Messages from './messages/page';
import Users from './users/page';

const Facebook = () => { 
    return (
    <div style={{width:"100%", textAlign:"center"}}>
        <Suspense fallback={<div>SCELETON FaceBook</div>}>
            <h1>There are our contacts in FaceBook</h1>
            <Users/>
            <Messages/>
        </Suspense>
    </div>) }

export default Facebook