'use client'
import React, { useEffect, useState } from 'react'

export default function page() {
    const [posts,setPosts]=useState<any[]>([]);
    const [filteredPosts, setFilteredPosts] = useState<any[]>([]);
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        let search=e.target.value;
        let postsSeatch=posts.filter((post:any)=>post.title.includes(search));
        setFilteredPosts(postsSeatch)
    }
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>{
            setPosts(data);
            setFilteredPosts(data); 
        })
        .catch(err=>console.log(err))
    },[])
  return (
    <div>
      <input style={{border:'1px solid green'}} className='p-[10px] m-[50px]' onChange={handleChange} type="text" placeholder='Nhập từ khóa tìm kiếm'/>
       {filteredPosts.map((p:any)=>(
        <ul>
            <li className='font-bold'>{p.title}</li>
            <li>{p.body}</li>
        </ul>
       ))}
    </div>
  )
}
