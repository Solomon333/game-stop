import React from 'react'
import { useState } from 'react'
import Slideimg from '../Slideimg'


const ImageSlider = ({slides}) =>  {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current + 1);
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current -1);
  }

  if(!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider  ' >
    
        {Slideimg.map((slide, index) => {
            return (
                <div
                className={index === current ? 'slide active' : 'slide'}
                key={index}
                >
                    {index === current && (
                        <img src={slide.image} alt='' className="image" />
                    )}
                    
                </div>
                
            )
        })}
        <div className=' flex justify-items-center  '>
          <div>
            <svg className="w-6 h-6 cursor-pointer hover:bg-red-500 " fill="current" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round"
              strokeWidth={2} d="M15 19l-7-7 7-7" onClick={nextSlide}/></svg>
        </div>
        <div>
        <svg className="w-6 h-6 cursor-pointer hover:bg-red-500"  fill="current" 
        stroke="currentColor" viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" 
          strokeWidth={2} d="M9 5l7 7-7 7"  onClick={prevSlide} /></svg>
          </div>
          </div>
    </section>

  )
    
  
}

export default ImageSlider