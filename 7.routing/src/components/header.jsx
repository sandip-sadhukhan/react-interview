import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return <header className='header'>
        <NavLink to="/auth">Home</NavLink>
        <NavLink to="/posts">Posts</NavLink>
    </header>
}

export default Header