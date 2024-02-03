"use client"
import {usePathname} from 'next/navigation';
export default function Project() { 
    const location = usePathname();
    return <h2>Make you choice</h2> }