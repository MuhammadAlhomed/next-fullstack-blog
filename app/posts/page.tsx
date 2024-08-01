import Link from "next/link";
import PostsList from "@/components/posts-list";
import { Suspense } from "react";

export default async function Page() {


  return (
    <main className="text-center pt-32 px-5">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">All Posts</h1>

        <Suspense fallback={"Loading..."}>
            <PostsList/>
        </Suspense>

    </main>
  )
}
