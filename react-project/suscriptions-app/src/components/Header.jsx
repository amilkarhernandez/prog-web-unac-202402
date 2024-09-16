import React from 'react'
import search from '../assets/images/search.svg'

export const Header = ({ title }) => {
    return (
        <div className='flex justify-between ml-4 mr-4 mt-2'>
            <h1 className='font-semibold text-2xl'>{title}</h1>
            <button><img src={search} alt="search" className='w-10' /></button>
        </div>
    )
}
