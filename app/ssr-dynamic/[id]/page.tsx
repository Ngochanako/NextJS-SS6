import React from 'react'
type ParamType={
    params:{
        id:string,
    }
}
async function getPosts(id:string){
    const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data=await res.json();
    return data;
}
export default async function page({params}:ParamType) {
    const {id}=params;
    const posts=await getPosts(id);
  return (
    <div>
       <h2 className='font-bold'>Chi tiết bài viết</h2>
       <p className='font-bold'>{posts.title}</p>
       <p>{posts.body}</p>
    </div>
  )
}
