import React from 'react'
import { Link } from 'react-router-dom'

function Header ({ 
  header,
  heading,
  paragraph,
  linkName,
  linkUrl='#'
}){
  return (
    <div className='mb-10'>
      <div className='flex justify-center '> 
      </div>
      <h1 className='text-slate-700 text-center mt-6 font-bold text-4xl  '>
        {header}
      </h1>
      <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
        {heading}
      </h2>
      <p className='mt-5 text-center text-gray-600 text-xl '>
        {paragraph} {' '}
        <Link to={linkUrl} className="font-medium text-purple-600 hover:text-purple-500">
          {linkName}
        </Link>
      </p>
    </div>
    
  )
  }

export default Header