"use client"
import { useDebouncedCallback } from 'use-debounce';
import { useState } from "react";
import { POST } from '../../api/(.)login/route';
import { useFormState } from 'react-dom';
import { createUser } from './actions';
import { toast } from 'react-toastify';
import Image from 'next/image';


const initialState = {
    message: 'HELLLO',
  }

  const Msg = ({ closeToast, toastProps }) => (
    <div>
            <img
            src="https://static.staff-clothes.com/uploads/media/image_product/0003/38/6c2a9381c4af4fcb9d1af4491e8f8d27.jpeg"
            width={270}
            height={270}
            alt="Picture of the author"
          />{toastProps.icon}
        Lorem ipsum dolor {toastProps.position}
      <button>Retry</button>
      <button onClick={closeToast}>Close</button>
    </div>
  );

export default function ModalLogin() { 
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [debouncedName, setDebouncedName] = useState("");
    const [state, formAction] = useFormState(createUser, initialState);
         
    const debounced = useDebouncedCallback(
        (value) => { setDebouncedName(value), POST(value) }, 1000);
    
    const displayMsg = () => {
            toast(<Msg />);
            // toast(Msg) would also work
          };

    return <div style={{ display: "flex", position:"absolute", width: "100vw", height: "100vh", flexDirection:'column', gap:"40px", backgroundColor:'#000', opacity:"0.5", top: "0", left:"0", justifyContent:"center", alignItems:"center"}}>
        <h1 style={{color:"white"}}>Login Form SRONG Redirect</h1>
        <input value={name} name="name" id="name" type='text' onChange={(e)=>{debounced(e.target.value), setName(e.target.value)}} style={{padding: "4px 8px", fontSize:"24px", color:"black"}}/>
        <p style={{color:"white", fontSize:"24px"}}>Value: {name}</p>
        <p style={{color:"white", fontSize:"24px"}}>Debounced value: {debouncedName}</p>

            <form action={formAction}>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} style={{padding: "4px 8px", fontSize:"24px", color:"black"}}/>
            <p  style={{color:"white", fontSize:"24px"}} aria-live="polite">
                {state?.message}
            </p>
            <button type="submit">Sign IN</button>
            </form>
            <button type="button" onClick={displayMsg}>Pop Up</button>
    </div>
 }