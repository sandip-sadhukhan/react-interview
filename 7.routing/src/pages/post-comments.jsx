import React, { useEffect, useState } from 'react'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'

const PostComments = () => {
  const dataList = useLoaderData();
  const post = dataList[0];
  const comments = dataList[1];

  const navigate = useNavigate()
  return (
    <div>
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

      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  )
}

export async function postCommentLoader({params}) {
  const postId = params.postId;
  const responseList = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`),
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
  ]);
  const dataList = await Promise.all([
    responseList[0].json(),
    responseList[1].json(),
  ])
  return dataList;
}

export default PostComments