import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
      const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target.email.value && e.target.password.value) {
      navigate("/posts")
    }
  }

  return (
     <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder='Enter email' />
      <input type="password" name="password" placeholder='Enter password' />
      <input type="submit" value="Submit" />
    </form>
  )
}

export default Login