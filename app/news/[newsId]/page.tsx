import Image from 'next/image';
import Link from "next/link";

interface Post {
    id: number;
    title: string;
    content: string;
    mainImage: string;
    date_created: string;
    date_updated: string;
}

export default async function PostPage({ params }: { params: { newsId: string } }) {
    // return <h1>{params.newsId}</h1>;
    const response = await fetch(`https://mana-news.astranexus.online/items/News/${params.newsId}`);
    const data = await response.json();
    const post: Post = data.data;  // Access the 'data' property of the response
    return (
        <div className="container m-10 mx-auto">
            <Link href="/news">
                <p className="text-cyan-950 mt-5 hover:underline">Back to News</p>
            </Link>
            <h1 className="text-3xl m-5 font-bold mb-8">{post.title}</h1>
            <p className="text-white m-5 text-sm mt-4">Posted on {new Date(post.date_created).toLocaleDateString("en-US")}</p>
            <p className="text-white m-5">{post.content}</p>
            {/* <Image src={post.mainImage} alt="News Image" width={400} height={400} /> */}
        </div>
    );
}
