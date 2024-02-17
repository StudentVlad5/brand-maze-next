'use client';
 
import { useEffect } from 'react';
 
export default function Error({
  error,
  reset,
}) {

  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);
 
  return (
    <div style={{display:"flex", width:"100%", height:"100vh", justifyContent:"center",alignItems:"center"}}>
      <h1>{error.message}</h1>
      <h2>Something went wrong!</h2>
      <button type="button" aria-label='error button'
        onClick={
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}