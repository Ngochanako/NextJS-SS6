
import React from 'react';



// Fetch dữ liệu chi tiết bài viết
async function getPostData(id: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch post data');
  }
  return response.json();
}

export default async function Page({ params }: { params: { id: string } }) {
  const staticIds = ['1', '2', '3'];

  // Kiểm tra nếu id không thuộc danh sách id tĩnh
  if (!staticIds.includes(params.id)) {
    return (
      <div>
        <h1>ID không được hỗ trợ cho SSR</h1>
      </div>
    );
  }

  const post = await getPostData(params.id);

  return (
    <div>
      <h1 className='font-bold'>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
