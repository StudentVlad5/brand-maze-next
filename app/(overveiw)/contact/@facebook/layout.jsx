"use client"

export default function Layout({ children }) {
  return (
    <div style={{width:"100%", paddingTop:"60px", display:"flex", justifyContent:"center",textAlign:"center"}}>
               {children}
    </div>
  );
};