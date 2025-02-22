import React from 'react'
import Link from "next/link";

export default async function PostsList() {
    const response = await fetch('https://dummyjson.com/posts?limit=10');
    const data = await response.json()

  return (
    <ul>
        {
            data.posts.map((post: any) => (
                <li key={post.id} className="mb-5">
                    <Link href={`/posts/${post.id}`}>{post.title}</Link>
                </li>
            ))
            
        }
      </ul>
  )
}
