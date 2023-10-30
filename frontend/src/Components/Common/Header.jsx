import React from 'react';
import { Input } from 'antd';
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const { Search } = Input;

const Header = () => {
  return (
    <header className='flex items-center h-[80px] px-[34px] py-[16px]'>
      <div className='flex items-center justify-between w-full'>
        <Search placeholder='Search here' className='remove-border !w-[60%]' size='large' />
        <div className='flex items-center gap-x-3'>
          <ShoppingCartOutlined
            style={{
              fontSize: '20px',
              cursor: 'pointer',
            }}
          />
          <UserOutlined
            style={{
              fontSize: '20px',
              cursor: 'pointer',
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
