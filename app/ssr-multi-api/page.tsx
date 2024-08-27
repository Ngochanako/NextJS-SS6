import React from 'react'

    
export default async function page() {
    const[users,posts]=await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()),
        fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res.json())
    ])

  return (
    <div>
        <p className='font-bold'>Danh sách người dùng</p>
        {users.map((u:any)=>(
            <ul>
                <li>{u.name}</li>
            </ul>
        ))}
         <p className='font-bold'>Danh sách bài viết</p>
        {posts.map((p:any)=>(
            <ul>
                <li>{p.title}</li>
            </ul>
        ))}
    </div>
  )
}
