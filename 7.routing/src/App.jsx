import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter} from "react-router-dom"
import AppLayout from './layouts/app-layout'
import Home from './pages/home'
import PostList, { postLoader } from './pages/post-list'
import PostComments, { postCommentLoader } from './pages/post-comments'
import Header from './components/header'

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

// function App() {
//   return (
//     <BrowserRouter>
//       <Header />
//       <Routes>
//         <Route index element={<Home />} />
//         <Route path='/posts'  element={<PostList />} />
//         <Route path='/posts/:postId'  element={<PostComments />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

export default App
