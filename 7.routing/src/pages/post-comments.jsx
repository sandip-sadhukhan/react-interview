import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const PostComments = () => {
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);

  const {postId} = useParams();

  const navigate = useNavigate()

  const fetchData = async () => {
    setLoading(true);

    try {
      const responseList = await Promise.all([
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`),
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      ]);
      const dataList = await Promise.all([
        responseList[0].json(),
        responseList[1].json(),
      ])

      setPost(dataList[0])
      setComments(dataList[1])
    } catch(error) {
      console.error("Error fetching posts: ", error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [postId])

  return (
    <div>
      {loading ? <p>Loading...</p> : (
        <div>
          {post && (
            <div className='post-card'>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          )}

          <h2>Comments</h2>
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>
                <strong>{comment.name}</strong> : {comment.body}
              </li>
            ))}
          </ul>
        </div>
      )}

      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  )
}

export async function postCommentLoader() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1/posts?limit=50");
  const data = await response.json();
  return data;
}

export default PostComments