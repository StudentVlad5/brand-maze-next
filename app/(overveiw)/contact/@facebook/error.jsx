"use client" 
export default function errorBoundary ({error}){
return <div style={{display:"flex", width:"100%", height:"100vh", justifyContent:"center",alignItems:"center"}}>
    <h1>{error.message}</h1>
</div>
}