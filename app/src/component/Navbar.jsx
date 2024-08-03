import React from 'react'
import { Link } from 'react-router-dom'


export const Navbar = () => {
  return (
    <div style={{width:'100vw', backgroundColor:'#f0f0ef' , color:'gray', height:'50px', display:'flex', alignItems:'center', justifyContent:'space-around' }}>
      <Link to={'/'}>Home</Link>
      <Link to={'/favourite'}>Favourite - List</Link>
      <Link to={'/login'}>Login</Link>
    </div>
  )
}


