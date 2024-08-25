'use client'
import React, { useEffect, useState } from 'react';
export default function Page() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Fetch dữ liệu từ API
    const fetchPosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  // Tính toán số trang
  const totalPages = Math.ceil(posts.length /5);

  // Lấy dữ liệu bài viết cho trang hiện tại
  const currentPosts = posts.slice(
    (currentPage - 1) * 5,
    currentPage * 5
  );

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
      <h1>Phân Trang với CSR</h1>
      <ul>
        {currentPosts.map((post:any) => (
          <li key={post.id}>
            <h2 className='font-bold'>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      <div className='flex gap-[20px] items-center m-[50px]'>
        <button className='bg-orange-400 text-white p-[10px]' onClick={goToPreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        
        <button className='bg-orange-400 text-white p-[10px]' onClick={goToNextPage} disabled={currentPage === totalPages}>
          Next
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>
      </div>
    </div>
  );
}
