import UpvoteBtn from "@/components/upvote-btn";

export default async function Page({
    params
} : {
    params: {id: string}
}) {
    const response = await fetch(`https://dummyjson.com/posts/${params.id}`);
    const data = await response.json()



  return (
    <main className="text-center pt-32 px-5">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">{data.title}</h1>
        <p className="max-w-[750px] mx-auto leading-8">{data.body}</p>

        <UpvoteBtn/>
    </main>
  );
}