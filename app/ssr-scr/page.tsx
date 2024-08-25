'use client'
import { get } from 'http';
import React, { useEffect, useState } from 'react'
 function getData(){
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
}
export default function page() {
    const [posts,setPosts]=useState<any[]>([]);
    useEffect(()=>{
       getData().then(setPosts) 
    },[])
    const handleFresh= ()=>{
        getData().then(setPosts)  //reload data
     }
  return (
    <div>
      <button onClick={handleFresh}>Refresh</button>
      <h2 className='font-bold'>Danh sách người dùng</h2>    
        {posts.map((btn:any)=>(
            <ul>
            <li className='font-bold'>{btn.title}</li>
            <li>{btn.body.slice(0,100)}</li>
             </ul>
        ))}  
    </div>
  )
}
