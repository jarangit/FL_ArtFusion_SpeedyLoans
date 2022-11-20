import React from 'react'
import { ArrowRightIcon, ClockIcon, LikeIcon, PlusIcon, UserIcon } from '../icons'

const WhatMakesSection = ({ onClickToTop }) => {
  return (
    <div className='flex flex-col gap-6 text-black justify-center items-center py-16 px-3'>
      <div className='flex items-center gap-3'>
        <div className='bg-[#3AD9FF] p-3 rounded-full'>
          <UserIcon
            color={"#124B70"}
            w={30}
          />
        </div>
        <div>
          <PlusIcon
            color={"#89839E"}
            w={15}
          />
        </div>
        <div className='bg-purple p-3 rounded-full'>
          <ClockIcon
            color={"#DED7F7"}
            w={30}
          />
        </div>
        <div>
          <PlusIcon
            color={"#89839E"}
            w={15}
          />
        </div>
        <div className='bg-[#FFE377] p-3 rounded-full'>
          <LikeIcon
            color={"#5C4E3F"}
            w={30}
          />
        </div>
      </div>
      <div className='text-center flex flex-col gap-3'>
        <div className='text-3xl font-bold'>What Makes Us Different</div>
        <div className='max-w-[700px]'>We don’t wait for action, we create action. Time is priceless, and we do our best to provide you with fast and sustainable connection with the most respected lenders in the industry.</div>
      </div>

      <div>
        <button
          className='w-[200px] h-[60px] bg-purple rounded-md text-white font-bold drop-shadow-lg transition-all hover:bg-[linear-gradient(#7760d5,#5242c2)]'
          onClick={() => onClickToTop()}
        >
          <div className='flex gap-3 justify-center items-center opacity-70'>
            <div className=''>
              Get Started
            </div>
            <div>
              <ArrowRightIcon
                color={"#fff"}
                w={20}
              />
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}

export default WhatMakesSection