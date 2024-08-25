import React, { useEffect, useState } from 'react'
//render dữ liệu use client
// async function fetchData(){
//    const response=await
// }
export default function page() {
    const [user,setUser]=useState();
    useEffect(()=>{
        fetch("")
        .then(res=>res.json())
        .then(data=>setUser(data))
        .catch(err=>console.log(err))

    },[]);
  return (
    <div className='bg-red-400'>
      
    </div>
  )
}
