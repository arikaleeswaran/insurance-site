import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className='w-full text-left text-2xl px-2 py-4 bg-blue-500 text-white p-0 cursor-pointer' onClick={()=>navigate('/')}>Insurance Site</div>
  )
}

export default Navbar