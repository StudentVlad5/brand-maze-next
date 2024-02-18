"use client"

export default function Layout({ children,instagram, telegram, facebook }) {
  return (
    <div style={{width:"100%", paddingTop:"60px", display:"flex", justifyContent:"center",textAlign:"center"}}>
               {children}
      <ul style={{width:"50%", height:"100%",display:"flex", justifyContent:"center", flexDirection:"column", gap:"60px", alignItems:"center"}}>     
              <li>{instagram}</li> 
              <li>{telegram}</li> 
              <li>{facebook}</li> 
      </ul>
    </div>
  );
};