import { Button } from 'antd'
import React from 'react'

const TableHeader = ({ title, description, btnText, btnHandler }) => {
    return (
        <div className='flex items-center justify-between p-5 border-b border-border-gray'>
            <div>
                {title && <h1 className='primary-heading text-xl'>{title}</h1>}
                {description && <span className='primary-span'>{description}</span>}
            </div>
            {btnText && <Button
                className={'ternary-btn font-cairo text-[14px] py-4 w-[120px] bg-theme-color text-[#ffff] hover:!text-[#ffff]'}
                onClick={btnHandler}>
                {btnText}
            </Button>}
        </div>
    )
}

export default TableHeader