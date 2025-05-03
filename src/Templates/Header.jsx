import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='p-3 bg-light'>
        
        <Link to='/' className='btn btn outline-primary me-2'>Home</Link>&nbsp;&nbsp;
        <Link to='/about' className='btn btn outline-success me-2'>About</Link>&nbsp;&nbsp;
        <Link to='/contact' className='btn btn outline-info me-2'>Contact</Link>&nbsp;&nbsp;
        <Link to='/login' className='btn btn outline-dark '>Login</Link>&nbsp;&nbsp;
      
        
       
    </div>

  )
}

export default Header