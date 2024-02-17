"use client"
import {usePathname} from 'next/navigation';
export default function ProjectNumber() { 
    const location = usePathname();
    function getRendomInt (count){
        return Math.floor(Math.random()*count)
    }
    const random = getRendomInt(2);
    if(random === 1){
        throw new Error("Error on Project ID page")
    }
    return <div style={{width:"100%", paddingTop:"60px", textAlign:"center"}}><h1>Service # {location.split('/').reverse()[0]}</h1></div> }