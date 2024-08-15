import { useState } from 'react'
import './App.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import AppLayout from './layouts/app-layout'
import Home from './pages/home'
import PostList from './pages/post-list'
import PostComments from './pages/post-comments'

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
        element: <PostList />
      },
      {
        path: "/posts/:postId",
        element: <PostComments />
      },
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
