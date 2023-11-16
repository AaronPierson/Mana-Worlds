import Image from 'next/image';
import Link from "next/link";
import ReactMarkdown from 'react-markdown'

interface Post {
    id: number;
    title: string;
    content: string;
    mainImage: string;
    date_created: string;
    date_updated: string;
    test: string;
}

export default async function PostPage({ params }: { params: { newsId: string } }) {
    // return <h1>{params.newsId}</h1>;
    const response = await fetch(`https://mana-news.astranexus.online/items/News/${params.newsId}`);
    const data = await response.json();
    const post: Post = data.data;  // Access the 'data' property of the response
    const imgURL = "https://mana-news.astranexus.online/assets/"
    return (
        <div className="container m-10 mx-auto">
            <Link href="/news">
                <p className="text-cyan-500 mt-5 ml-5 hover:underline">Back to News</p>
            </Link>
            <p className="text-white m-5 text-sm mt-4">Posted on {new Date(post.date_created).toLocaleDateString("en-US")}</p>
            <h1 className="text-3xl m-5 font-bold mb-8">{post.title}</h1>
            <Image className="m-auto" src={imgURL + post.mainImage} alt="News Image" width={400} height={400} />
            <ReactMarkdown className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl">
                {post.content}
            </ReactMarkdown>
        </div>
    );
}
