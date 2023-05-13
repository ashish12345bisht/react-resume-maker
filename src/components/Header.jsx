import React from 'react'

export const Header = () => {
    return (
        <header className='flex justify-center w-screen'>
            <button className='bg-cyan-500 hover:bg-cyan-600 p-2 m-2 rounded border-2 border-indigo-600'>Template 1</button>
            <button className='bg-cyan-500 hover:bg-cyan-600 p-2 m-2 rounded border-2 border-indigo-600'>Template 2</button>
            <button className='bg-cyan-500 hover:bg-cyan-600 p-2 m-2 rounded border-2 border-indigo-600'>Template 3</button>
        </header>
    )
}