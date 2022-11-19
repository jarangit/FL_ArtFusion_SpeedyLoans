import React from 'react'

const HowItWorksSection = () => {
  return (
    <div className='myContainer !my-10 grid grid-cols-2 items-center'>
      <div className='p-3 col-span-2 lg:col-span-1'>
        <div className='flex flex-col gap-6'>
          <div className='text-3xl font-semibold text-black'>How It Works</div>
          <div className='text-black font-light leading-7'>The process is super fast and simple. It takes minutes to see results and enjoy your extra cash</div>

          <div className={`grid grid-cols-3 gap-3`}>
            <div className='border-r border-gray-light'>
              {/* item */}
              <div className='text-purple font-bold text-xl'>01</div>
              <div className='font-light text-sm'>Submit A Request</div>
            </div>
            <div className='border-r border-gray-light'>
              {/* item */}
              <div className='text-purple font-bold text-xl'>02</div>
              <div className='font-light text-sm'>Check The Offers</div>
            </div>
            <div className=''>
              {/* item */}
              <div className='text-purple font-bold text-xl'>03</div>
              <div className='font-light text-sm'>Receive Your Money</div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-span-2 lg:col-span-1'>
        <img src="/image/section2.png" alt="" />
      </div>
    </div>
  )
}

export default HowItWorksSection