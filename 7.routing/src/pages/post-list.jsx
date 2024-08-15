import React, { useEffect, useState } from 'react'
import PostCard from '../components/post-card';

const PostList = () => {
  const url = "https://jsonplaceholder.typicode.com/users/1/posts?limit=50";
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPosts(data);
    } catch(error) {
      console.error("Error fetching posts: ", error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchPosts();
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      {
        posts.map(post => (
          <div key={post.id}>
            <PostCard post={post} />
          </div>
        ))
      }
    </div>
  )
}

export default PostList