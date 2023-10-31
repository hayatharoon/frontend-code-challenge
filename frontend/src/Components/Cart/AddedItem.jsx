import React from 'react';
import { useCartStore } from '../../store/store';
import { DeleteOutlined } from '@ant-design/icons';
import { message } from 'antd';

const AddedItem = ({ data }) => {
  console.log(data);
  const { cart, setCart } = useCartStore();

  const deleteHandler = () => {
    setCart(cart?.filter((el) => el.id !== data?.id));
  };

  const handleIncrement = () => {
    setCart(cart?.map((item) => (item.id === data.id ? { ...data, quantity: data?.quantity + 1 } : item)));
  };

  const handleDecrement = () => {
    setCart(
      cart.map((item) => {
        if (item.id === data.id) {
          if (data.quantity > 1) {
            return {
              ...data,
              quantity: data.quantity - 1,
            };
          } else {
            message.error('Quantity must be aleast 1');
          }
        }
        return item;
      })
    );
  };

  return (
    <div className='justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start'>
      <img src={data.img} alt='product-image' className='w-full rounded-lg sm:w-40' />
      <div className='sm:ml-4 sm:flex sm:w-full sm:justify-between'>
        <div className='mt-5 sm:mt-0'>
          <h2 className='text-lg font-bold text-gray-900'>{data?.name}9</h2>
          <p className='mt-1 text-lg text-gray-700'>{`${data?.price} $`}</p>
        </div>
        <div className='mt-4 flex flex-col justify-between sm:space-y-6 sm:mt-0 sm:space-x-4 '>
          <div className='flex items-center border-gray-100'>
            <span
              className='cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-theme-color hover:text-blue-50'
              onClick={handleDecrement}>
              -
            </span>
            <input className='h-8 w-8 border bg-white text-center text-xs outline-none' type='text' value={data?.quantity} min='1' />
            <span
              className='cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-theme-color hover:text-blue-50'
              onClick={handleIncrement}>
              +
            </span>
          </div>
          <div className='flex items-center justify-end space-x-4'>
            <p className='hover:text-[red] cursor-pointer'>
              <DeleteOutlined
                style={{
                  fontSize: '20px',
                }}
                onClick={deleteHandler}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddedItem;
