"use client";
const jsonData = require('../../../data/blogs.json');

type Blog = {
    id: string;
    name: string;
    description: string;
    body: string;
}
 
export default function Page({ params }: { params: { slug: string } }) {
  const blogData = jsonData.find((blog: Blog) => blog.id == params.slug);
  return <div className="flex min-h-screen flex-col items-center justify-between p-24">
    <h1 className="text-4xl font-bold">Blog Name: {blogData.name}</h1>
    <h2 className="text-2xl font-bold">Description: {blogData.description}</h2>
    <p>{blogData.body}</p>
  </div>
}