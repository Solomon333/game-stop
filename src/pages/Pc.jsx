import React from 'react'
import { Link } from 'react-router-dom'

function Pc() {
  return (
    <div className='bg-white h-screen px-4 text-center border-solid'>
                <Link className='sky-900' to={'/'} ><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg></Link>

        <div className='  '>
            <h2 className='text-xl px-4 py-8 text-red-800 '>
                this is the Pc page!!!!!!
            </h2>
            <div className='grid grid-rows-2 grid-flow-col gap-16 justify-center '>
            <div className= 'h-3/3 bg-gray-200 shadow-xl shadow-slate-500  cursor-pointer hover:scale-105 hover:bg-purple-900 hover:text-white ease-in-out duration-300'>
                <img className='px-4 py-9 h-2/3 w-60' src='./images/pc/bundle-pc.jpg' alt='#' ></img>
                <p><strong>Powerfull gaming pc Bundle: 2549.99$ </strong></p>
            </div>
            <div className='h-3/3 bg-gray-200 shadow-xl shadow-slate-500  cursor-pointer hover:scale-105 hover:bg-purple-900 hover:text-white ease-in-out duration-300'>
                <img className='px-4 py-9 h-2/3 w-60' src='./images/pc/driving-wheal.webp' alt='#' ></img>
                <p><strong>Pc Driving wheal setup: 769.99$</strong></p>
            </div>
            <div className='h-3/3 bg-gray-200 shadow-xl shadow-slate-500  cursor-pointer hover:scale-105 hover:bg-purple-900 hover:text-white ease-in-out duration-300'>
                <img className='px-4 py-9 h-2/3 w-60'  src='./images/pc/gaming-desk.webp' alt='#' ></img>
                <p className=''><strong>Pc Gaming-desk: 559.99$</strong></p>
            </div>
            <div className='h-3/3 bg-gray-200 shadow-xl shadow-slate-500  cursor-pointer hover:scale-105 hover:bg-purple-900 hover:text-white ease-in-out duration-300'>
                <img className='px-4 py-9 h-2/3 w-60'  src='./images/pc/gaming-keybord+mouse.jpg' alt='#' ></img>
                <p><strong>Gaming keybord+mouse: 69.99$</strong></p>
                <span><button className='bg-gray-400'>add to cart</button></span>  
                <span> <button>buy</button> </span>
            </div>
        </div>
        </div>
    </div>
        
  )
}

export default Pc