import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react"
import { Link } from "react-router-dom";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import ImageSlider from "./ImageSlider";
import Slideimg from "../Slideimg";

function Navbar() {
    // const [searchTerm, setSearchTerm] = useState('enter');

    // const handleKeyDown = (e) => {
    //   setSearchTerm(e.target.value);
    //   if(e.key === "Enter"){  
    //     console.log(searchTerm)
    //   }
     
    // }

    return <nav className="sticky top-0 flex justify-center items-center  bg-gray-400 px-4 py-4 border gap-x-20">
        <Link>Game-Time</Link>
        <ul className="flex px-4 py-4 mx-4 ">
            <li>
                <Link to="/playstation" className="px-2">Playstation</Link>
                </li>
            <li>
                <Link to="/xbox" className="px-2">Xbox</Link>
                </li>
            <li>
                <Link to="/nintendo" className="px-2">Nintendo</Link>
                </li>
            <li>
                <Link to="/pc" className="px-2">Pc</Link>
                </li>
        </ul>
        <input className='w-[400px] px-2 py-2'
          type="search"
          placeholder='Search for games consoles etc...'
          />
        <FontAwesomeIcon icon={faSearch} className="searchIcon"/>
      
        <div className="flex gap-4 ">
         <Link to={'/cart'}>
            <svg className="w-6 h-6 " fill="none" stroke="currentColor"
          viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
             d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.7071.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="hover:text-red-500">Cart</span>
              </Link> 
                <Link to={'/login'} >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" 
            strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="hover:text-red-500">Sign-in</span>
                </Link> 
            </div>
    </nav>

}


export default Navbar









//     <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
//   <div className="container flex flex-wrap justify-between items-center mx-auto">
//     <a href="https://flowbite.com/" className="flex items-center">
//         <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
//         <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
//     </a>
//     <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
//       <span className="sr-only">Open main menu</span>
//       <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
//     </button>
//     <div className="hidden w-full md:block md:w-auto" id="navbar-default">
//       <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//         <li>
//           <a href="#" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
//         </li>
//         <li>
//           <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
//         </li>
//         <li>
//           <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
//         </li>
//         <li>
//           <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
//         </li>
//         <li>
//           <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
    
        
