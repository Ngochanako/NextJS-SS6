import React from 'react'
export default async function page() {
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts", {
        next: { revalidate: 60 }, // Tái tạo trang mỗi 60 giây
      }).then((res) => res.json());
  return (
    <div>
      <p className='font-bold'>Danh sách bài viết</p>
      {posts.map((p:any)=>(
            <div key={p.id}>
                <p>{p.title}</p>
                <p>{p.body}</p>
            </div>
      ))}
    </div>
  )
}
