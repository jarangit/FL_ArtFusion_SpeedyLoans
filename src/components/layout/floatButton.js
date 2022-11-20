import React from 'react'
import { ArrowRightIcon } from '../icons'
const FloatButton = ({ onClickToTop, showBut }) => {
  return (
    <div className={`fixed bottom-8 lg:bottom-4 right-4 transition-all duration-700 ${showBut ? "opacity-100" : "opacity-0"}`}>
      <button
        className='w-[200px] h-[60px] bg-[linear-gradient(#f2d670,#ffee89)] rounded-md text-black font-bold drop-shadow-lg transition-all hover:bg-[#ffee89]'
        onClick={() => onClickToTop()}
      >
        <div className='flex gap-3 justify-center items-center opacity-70'>
          <div className=''>
            Get Started
          </div>
          <div>
            <ArrowRightIcon
              color={"#000112d6"}
              w={20}
            />
          </div>
        </div>
      </button>
    </div>
  )
}

export default FloatButton