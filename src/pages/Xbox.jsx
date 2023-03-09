import React from 'react'
import { Link } from 'react-router-dom'

function Xbox() {
  return (
    
    <div className='bg-white bg-gradient-to-t h-screen px-4 text-center'>
                <Link className='sky-900' to={'/'} >Game-Stop</Link>
        <div className='  '>
            <h2 className="text-xl px-4 py-4  ">
                this is the xbox page!!!!!!
            </h2>
            <div className='grid grid-rows-2 grid-flow-col gap-16 justify-center  '>
            <div className= 'h-3/3 bg-gray-200 shadow-xl shadow-slate-500 cursor-pointer hover:scale-105 hover:bg-green-900 hover:text-white ease-in-out duration-300'>
                <img className='px-4 py-9 h-2/3 w-60' src='./images/xbox/fortnite.jpg' alt='#' ></img>
                <p><strong>Fortnite : 49.99$ </strong></p>
            </div>
            <div className='h-3/3 bg-gray-200 shadow-xl shadow-slate-500 cursor-pointer hover:scale-105 hover:bg-green-900 hover:text-white ease-in-out duration-300'>
                <img className='px-4 py-9 h-2/3 w-60' src='./images/xbox/xboxconsole.webp' alt='#' ></img>
                <p><strong>Xbox console+remote: 1169.99$</strong></p>
            </div>
            <div className='h-3/3 bg-gray-200 shadow-xl shadow-slate-500 cursor-pointer hover:scale-105 hover:bg-green-900 hover:text-white ease-in-out duration-300'>
                <img className='px-4 py-9 h-2/3 w-60'  src='./images/xbox/xboxremote.jpg' alt='#' ></img>
                <p className=''><strong>Xbox remote: 59.99$</strong></p>
            </div>
            <div className='h-3/3 bg-gray-200 shadow-xl shadow-slate-500 cursor-pointer hover:scale-105 hover:bg-green-900 hover:text-white ease-in-out duration-300'>
                <img className='px-4 py-9 h-2/3 w-60'  src='./images/xbox/farcry.jpg' alt='#' ></img>
                <p><strong> Farcry: 49.99$</strong></p>
                <span><button className='bg-gray-400'>add to cart</button></span>  
                <span> <button>buy</button> </span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Xbox