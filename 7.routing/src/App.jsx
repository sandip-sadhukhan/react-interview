import { useState } from 'react'
import './App.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import AppLayout from './layouts/app-layout'
import Home from './pages/home'
import PostList, { postLoader } from './pages/post-list'
import PostComments, { postCommentLoader } from './pages/post-comments'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/posts",
        element: <PostList />,
        loader: postLoader,
      },
      {
        path: "/posts/:postId",
        element: <PostComments />,
        loader: postCommentLoader,
      },
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
