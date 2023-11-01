import React from 'react';
import { useCartStore } from '../../store/store';
import AddedItem from '../../Components/Cart/AddedItem';
import ItemPrice from '../../Components/Cart/ItemPrice';

const Cart = () => {
  const { cart } = useCartStore();

  const getAllPayments = () => {
    const totalPrice = cart?.map((el) => el.price * el.quantity)?.reduce((acc, current) => acc + current, 0);
    return totalPrice;
  };

  return (
    <div>
      <div className='h-screen bg-gray-100 pt-20'>
        <div className='justify-center px-6 md:flex md:space-x-6 xl:px-0'>
          <div className='rounded-lg md:w-2/3'>
            {cart?.map((data) => (
              <>
                <AddedItem data={data} key={data?.id} />
              </>
            ))}
          </div>
          <div className='mt-6 h-full rounded-lg bg-white p-6 shadow-md md:mt-0 md:w-1/3'>
            <p className='text-xl font-bold mb-5'>Payment Details</p>
            {cart?.map(({ name, price, quantity }) => (
              <ItemPrice name={name} price={price} quantity={quantity} />
            ))}
            <hr className='my-4' />
            <div className='flex justify-between'>
              <p className='text-lg font-bold'>Total</p>
              <div className=''>
                <p className='mb-1 text-lg font-bold'>{`${getAllPayments()} $`}</p>
              </div>
            </div>
            <button className='mt-6 w-full rounded-md bg-theme-color py-1.5 font-medium text-blue-50 hover:bg-theme-color'>Check out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
