import React from 'react'
import { accordionData } from '../../contrants/accordionData'
import AccordionItem from './accordionItem'

const According = () => {
  return (
    <div className='bg-gray'>
      <div className='py-16 myContainer px-6'>
        {accordionData.map((item, key) => (
          <div key={key}>
            <AccordionItem
              id={item.id}
              title={item.title}
              content={item.content}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default According