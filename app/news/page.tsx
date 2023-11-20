import Link from "next/link";
import React from "react";
import { Metadata } from 'next';

export const metadata : Metadata = {
    title: 'News',
    description: 'Mana Worlds News Page',
}
interface Post {
    id: number;
    title: string;
    excerpt: string;
    date_created: string;
}

const NewsPage = async () => {
    const response = await fetch('https://mana-news.astranexus.online/items/News/');
    const data = await response.json();
    const post: Post[] = data.data;  // Access the 'data' property of the response

        // Format the date
        post.forEach(item => {
            let date = new Date(item.date_created);
            item.date_created = date.toLocaleDateString("en-US");
        });

    return (
    <div className="container mx-auto py-8 ">
    <h1 className="text-3xl m-5 font-bold mb-8">Latest News</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {post.map(post => (
                <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
                <Link href={`/news/${encodeURIComponent(post.id)}`}>
                    <h2 className="text-xl text-black font-bold mb-4">{post.title}</h2>
                </Link>
                    <p className="text-gray-600">{post.excerpt}</p>
                    <p className="text-gray-600 text-sm mt-4">Posted on {post.date_created}</p>
                    <Link href={`/news/${post.id}`}>
                        <p className="text-cyan-950 mt-5 hover:underline">Read More</p> 
                    </Link>
                </div>
            ))}
        </div>
    </div>
    );
};

export default NewsPage;
