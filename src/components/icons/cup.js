import React from 'react'

const CupIcon = ({ color, w }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color} width={w} ><g>
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M13 16.938V19h5v2H6v-2h5v-2.062A8.001 8.001 0 0 1 4 9V3h16v6a8.001 8.001 0 0 1-7 7.938zM1 5h2v4H1V5zm20 0h2v4h-2V5z"></path>
    </g>
    </svg>
  )
}

export default CupIcon