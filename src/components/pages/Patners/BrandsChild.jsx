import React from 'react'
import svg_logo from '../../assets/Partners_image/svg_logo1.svg'
export default function BrandsChild({
    logo = svg_logo,
}) {
  return (
    <div className='m-3 p-3 max-w-[7rem]  border-2 dark:border-cyan-200 shadow-lg rounded-md'>
      <img src={logo} alt="Brand_logo" />
    </div>
  )
}
