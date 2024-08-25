"use client"
import React, { useEffect, useState } from 'react'

export default function page() {
  const [users,setUsers]=useState([]);
  useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(res=>res.json())
      .then(data=>setUsers(data))
      .catch(err=>console.log(err))
  },[])
  return (
    <div>
       <h3>Danh sách người dùng</h3>
       {users.map((user:any) =>(
        <p>{user.name}</p>
       ))}
    </div>
  )
}
