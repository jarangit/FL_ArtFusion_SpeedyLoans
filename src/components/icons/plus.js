import React from 'react'

const PlusIcon = ({ color, w }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color} width={w} ><g>
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path>
    </g>
    </svg>
  )
}

export default PlusIcon