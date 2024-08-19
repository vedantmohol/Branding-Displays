import React from 'react';
import {Link } from 'react-router-dom';

const Item = ({id,name,image}) => {
  return (
    <div className='rounded-xl overflow-hidden shadow-lg'>
        <div className='relative flexCenter group overflow-hidden transition-all duration-100'>
            <Link to={`product/${id}`}  ></Link>
            <img src={image} alt='productImage' className='w-full block object-cover group-hover:scale-110 transition-all duration-1000'/>
        </div>
        <div className='p-4 overflow-hidden'>
            <h4 className='my-[6px] medium-16 line-clamp-2 text-gray-30'>{name}</h4>
        </div>
    </div>
  )
}

export default Item