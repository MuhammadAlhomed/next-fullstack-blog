"use server";

export default async function CreatePost(formData: FormData){
    const title = formData.get("title") as String
    console.log(title);
}