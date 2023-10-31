import React from 'react';
import { Button, Image, message } from 'antd';
import { useCartStore } from '../../store/store';

const ItemCart = ({ id, name, price, img }) => {
  const { cart, setCart } = useCartStore();

  const handleAddToCart = () => {
    const alreadyAdded = cart.some((item) => item.id === id);

    if (alreadyAdded) {
      const updatedCart = cart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });

      setCart(updatedCart);
    } else {
      const newItem = {
        id,
        name,
        price,
        img,
        quantity: 1,
      };

      setCart([...cart, newItem]);
    }

    message.success(`${name} item is added to cart!`);
  };

  return (
    <div className='p-4 sm:w-1/2 md:w-1/3 2xl:w-1/4 '>
      <div className='h-full rounded-xl shadow-cla-pink border overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
        <Image
          className='lg:h-48 md:h-36 w-full object-cover object-center scale-105 transition-all duration-400 hover:scale-100'
          src={img}
          alt='blog'
          preview={false}
        />
        <div className='p-6'>
          <h1 className='title-font text-lg font-medium text-gray-600 mb-3'>{name}</h1>
          <div className='flex items-center justify-between flex-wrap'>
            <Button className='ternary-btn hover:scale-105  shadow-cla-blue px-6 rounded-lg' onClick={handleAddToCart}>
              Add to cart
            </Button>
            <h2 className='text-lg font-medium text-gray-800 mb-1'>{`${price} $`}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
