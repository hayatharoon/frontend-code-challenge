import React from 'react'

const ItemPrice = ({ name, price, quantity }) => {
    return (
        <div className='mb-2 flex justify-between'>
            <p className='text-gray-700'>{name}</p>
            <p className='text-gray-700'>{`${price * quantity} $`}</p>
        </div>
    )
}

export default ItemPrice