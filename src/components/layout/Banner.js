import React from 'react'
import LogoIcon from '../icons/logo'

const Banner = () => {
  const bannerImage = '/image/bg_banner.jpeg'
  return (
    <div className={`w-full h-[900px] bg-cover relative`}
      style={{
        backgroundImage: `url(${bannerImage})`
      }}
    >
      <div className='w-full absolute h-[900px] bg-cover' style={{ background: `linear-gradient(rgba(90,71,204,.75),#5a47cc)` }} />
      <div className='myContainer !my-auto h-[900px] flex items-center overflow-hidden'>
        <div className='absolute grid grid-cols-2 w-full items-center'>
          <div className='col-span-1'>
            <div className='mx-auto w-fit'>
              <div className='flex gap-6 items-center'>
                <div>
                  <LogoIcon color="#ffff" w={70} />
                </div>
                <div className='text-3xl text-white opacity-70'>
                  speedyloans-usa
                </div>
              </div>
              <div className='text-[48px] text-white font-bold max-w-[500px]'>
                Get Your Personal Loan Up To $5000
              </div>
            </div>
          </div>

          <div className='col-span-1'>
            <div className='mx-auto'>
              <div id="_lg_form_" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner