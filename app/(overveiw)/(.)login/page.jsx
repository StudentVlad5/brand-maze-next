"use client"
import { useDebouncedCallback } from 'use-debounce';
import { useState } from "react";
import { POST } from '../../api/(.)login/route';
import { useFormState } from 'react-dom';
import { createUser } from './actions';
const initialState = {
    message: 'HELLLO',
  }

export default function ModalLogin() { 
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [debouncedName, setDebouncedName] = useState("");
    const [state, formAction] = useFormState(createUser, initialState);

    const debounced = useDebouncedCallback(
        (value) => { setDebouncedName(value), POST(value) }, 1000)

    return <div style={{ display: "flex", position:"absolute", width: "100vw", height: "100vh", flexDirection:'column', gap:"40px", backgroundColor:'#000', opacity:"0.5", top: "0", left:"0", justifyContent:"center", alignItems:"center"}}>
        <h1 style={{color:"white"}}>Login Form SOFT Redirect</h1>
        <input value={name} name="name" id="name" type='text' onChange={(e)=>{debounced(e.target.value), setName(e.target.value)}} style={{padding: "4px 8px", fontSize:"24px", color:"black"}}/>
        <p style={{color:"white", fontSize:"24px"}}>Value: {name}</p>
        <p style={{color:"white", fontSize:"24px"}}>Debounced value: {debouncedName}</p>

            <form>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} style={{padding: "4px 8px", fontSize:"24px", color:"black"}}/>
            <p  style={{color:"white", fontSize:"24px"}} aria-live="polite">
                {state?.message}
            </p>
            <button type="submit" action={formAction}>Sign IN</button>
            </form>
    </div>
 }