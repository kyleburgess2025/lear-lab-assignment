const jsonData = require('../../data/blogs.json');

type Blog = {
    id: string;
    name: string;
    description: string;
    body: string;
}

export default function BlogHome() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold">Blog</h1>
        <h2 className="text-2xl font-bold">Welcome to the Kyle Blog! Here, we have a large number of cool things.</h2>
        {jsonData.map((blog: Blog) => {
            return (
                <a href={`blog/${blog.id}`} key={blog.id} className="flex items-center justify-between w-96 p-3 border border-gray-300 rounded-lg">
                    <p>{blog.name}</p>
                    <p>{blog.description}</p>
                </a>
            );
        } )}
        </main>
    );
}