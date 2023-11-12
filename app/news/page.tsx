
import { useState, useEffect } from 'react';

const NewsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://your-directus-api-url.com/posts');
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

return (
    <div className="container mx-auto">
    <h1 className="text-3xl font-bold mb-8">Latest News</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-bold mb-4">{post.title}</h2>
                    <p className="text-gray-600">{post.content}</p>
                </div>
            ))}
        </div>
    </div>
  );
};

export default NewsPage;
