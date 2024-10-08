"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
// khi tạo 1 cái component (export default function) thì mặc định là server component,chạy môi trường server
export default function Home() {
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
  );
}
