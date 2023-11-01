import React from 'react'

const ButtonSpan = ({ innerText, clickHandler }) => {
    return (
        <span
            className='cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-theme-color hover:text-blue-50'
            onClick={clickHandler}
        >
            {innerText}
        </span>
    )
}

export default ButtonSpan