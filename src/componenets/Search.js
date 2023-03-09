import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



const Search = () => {

  const [searchTerm, setSearchTerm] = useState('enter');

    const handleKeyDown = (e) => {
      setSearchTerm(e.target.value);
      if(e.key === "Enter"){  
        console.log(searchTerm)
      }
     
    }

  return (
    <div>
         
            <FontAwesomeIcon icon={faSearch} className="searchIcon" />
         
         
    </div>
  )
}

export default Search