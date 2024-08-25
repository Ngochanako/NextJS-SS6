import React from 'react'
async function getPosts(){
    const res=await fetch('https://jsonplaceholder.typicode.com/posts')
    const data=await res.json()
    return data;
}
export default async function page() {
    const posts=await getPosts();
    return(
        <div>
        <h2 className='font-bold'>Danh sách bài viết</h2>
       
            {posts.map((post:any)=>(
                <div key={post.id}>
                    <div className='font-bold'>{post.title}</div>
                    <p>{post.body}</p>
                </div>
            ))}
        
        </div>
    )
}
