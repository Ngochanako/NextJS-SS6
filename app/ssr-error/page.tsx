import React from 'react'
async function getData(){
    try {
        const res =await fetch('https://jsonplaceholder.typicode.com/nonexistent-url');
        if(!res.ok){
            throw new Error('Failed')
        }
        return await res.json();
    } catch (error) {
        throw error;
    }
     
}
export default async function page() {
    let data;
    try {
       data=await getData(); 
    }catch(error:any){
        return (
            <div>
                <p>Xử lý lỗi với dữ liệu</p>
                <p>Có lỗi xảy ra khi fetch dữ liệu:{error.mesage}</p>
            </div>
        )
    }
  return (
    <div>
      jjjj
    </div>
  )
}
