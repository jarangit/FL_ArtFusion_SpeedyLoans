import React from 'react'
import { accordionData } from '../../contrants/accordionData'
import AccordionItem from './accordionItem'

const According = () => {
  return (
    <div className='bg-gray'>
      <div className='py-16 myContainer px-6'>
        {accordionData.map((item) => (
          <AccordionItem
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </div>
  )
}

export default According