import React from "react";
import CreatePost from "@/actions/create-post";

export default function Page() {
  return (
    <main className="text-center pt-32 px-5">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Create Post</h1>

        <form
        action={CreatePost}
         className="h-10 space-x-2 mt-10">
            <input
                type="text"
                name="title"
                placeholder="Title for a new post"
                required
                className="border rounded p-2 h-full" />

            <button className="bg-blue-500 text-white p-2 mt-10 rounded-lg">Submit</button>
        </form>
      
    </main>
  )
}
