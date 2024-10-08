import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter} from "react-router-dom"
import AppLayout from './layouts/app-layout'
import Home from './pages/home'
import PostList, { postLoader } from './pages/post-list'
import PostComments, { postCommentLoader } from './pages/post-comments'
import Header from './components/header'
import Error from './components/error'
import Login from './components/login'
import SignUp from './components/signup'
import RequireAuth from './components/require-auth'
import Product from './pages/products'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/auth",
        element: <Home />,
        children: [
          {
            path: "/auth/login",
            element: <Login />
          },
          {
            path: "/auth/signup",
            element: <SignUp />
          },
        ]
      },
      {
        path: "/posts",
        element: <RequireAuth>
            <PostList />
          </RequireAuth>,
        loader: postLoader,
      },
      {
        path: "/posts/:postId",
        element: <PostComments />,
        loader: postCommentLoader,
      },
      {
        path: "/product",
        element: <Product />
      }
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
