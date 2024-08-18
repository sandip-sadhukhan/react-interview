import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <NavLink to="/auth/login">Login</NavLink>
        <NavLink to="/auth/signup">Signup</NavLink>
      </div>

      <Outlet />
    </div>
  )
}

export default Home