import React, { useState } from 'react'
import { MinusIcon } from '../icons'

const AccordionItem = ({ title, content }) => {
  const [show, setShow] = useState(false)

  return (
    <div className='border-b border-border'>
      <div className='flex justify-between  py-2 cursor-pointer'
        onClick={() => setShow(!show)}
      >
        <div className='font-bold text-black'>
          {title}
        </div>
        <div className=' flex justify-center items-center transition-all'>
          {show ? (
            <div className='p-2'>
              <div className='h-[2px] w-[10px] bg-black' />
            </div>
          ) : (
            <MinusIcon
              color={'000112d6'}
              w={20}
            />
          )}
        </div>
      </div>
      <div className={`overflow-hidden transition-all text-sm duration-300 ${show ? "max-h-[500px] pb-3" : "max-h-0"}`}>
        {content === "table" ? (
          <table className="table-auto w-[400px] text-center border-border border">
            <thead>
              <tr>
                <th className='border border-border' >Minimum</th>
                <th className='border border-border' >Maximum</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border border-border'>65 days</td>
                <td className='border border-border'>84 months</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <div>
            {content}
          </div>
        )}
      </div>
    </div>
  )
}

export default AccordionItem