import React from 'react'
import { PlusIcon } from '../icons'

const FastSection = () => {
  return (
    <div className='myContainer !my-10 grid grid-cols-2 items-center'>
      <div className='col-span-2 lg:col-span-1'>
        <img src="/image/section3.png" alt="" />
      </div>
      <div className='p-3 col-span-2 lg:col-span-1'>
        <div className='flex flex-col gap-6'>
          <div className='text-3xl font-semibold text-black'>Fast. Reliable. Transparent.</div>
          <div className='text-black font-light leading-7'>We offer free and straightforward services without any hidden fees or charges on our part. And as we care about your comfort and safety, we enable you to submit a request without having to worry about any obligations or threats to your data security.</div>

          <div className='col-span-2 lg:col-span-1 font-light flex flex-col gap-3'>
            <div className='flex gap-3 items-center'>
              <div>
                <PlusIcon
                  color={"#5a47cc"}
                  w={20}
                />
              </div>
              <div>Plans for absolutely all credit types</div>
            </div>
            <div className='flex gap-3 items-center'>
              <div>
                <PlusIcon
                  color={"#5a47cc"}
                  w={20}
                />
              </div>
              <div>No upfront or surprise hidden fees</div>
            </div>
            <div className='flex gap-3 items-center'>
              <div>
                <PlusIcon
                  color={"#5a47cc"}
                  w={20}
                />
              </div>
              <div>Simple and smart request forms</div>
            </div>
            <div className='flex gap-3 items-center'>
              <div>
                <PlusIcon
                  color={"#5a47cc"}
                  w={20}
                />
              </div>
              <div>Fast and secure processing</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default FastSection