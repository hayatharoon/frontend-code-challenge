import React from 'react';
import { Badge, Input } from 'antd';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/store';
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const { Search } = Input;

const Header = () => {
  const { cart } = useCartStore();
  return (
    <header className='flex items-center h-[80px] px-[34px] py-[16px]'>
      <div className='flex items-center justify-between w-full'>
        <Search placeholder='Search here' className='remove-border !w-[60%]' size='large' />
        <div className='flex items-center gap-x-3'>
          <Badge count={cart.length}>
            <Link to={'/cart'}>
              <ShoppingCartOutlined className='cursor-pointer' style={{ fontSize: '26px' }} />
            </Link>
          </Badge>
          <UserOutlined
            style={{
              fontSize: '26px',
              cursor: 'pointer',
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
