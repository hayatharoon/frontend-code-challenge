import React from 'react';
import { UserOutlined, HomeOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Menu, Image } from 'antd';

import { Link } from 'react-router-dom';
import Logo from '../assets/images/rando.png';
import Header from '../Components/Common/Header';
import Cart from '../assets/icon/Cart';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem(
    <Link to={'/'}>Home</Link>,
    '1',
    <HomeOutlined
      style={{
        fontSize: '18px',
      }}
    />
  ),
  getItem(
    <Link to={'/items'}>Items</Link>,
    '2',
    <span className='custom-icon'>
      <Cart />
    </span>
  ),
  getItem(
    <Link to={'/cart'}>Cart</Link>,
    '3',
    <ShoppingCartOutlined
      style={{
        fontSize: '20px',
      }}
    />
  ),
];

const MainLayout = ({ children }) => {
  const onClick = (e) => {
    console.log('click ', e);
  };

  return (
    <div className='flex flex-row relative'>
      <div
        className={`grid grid-rows-[16%_85%]  fixed justify-center transition-all duration-500 h-screen shadow-boxShadow w-[220px] portal-sidebar font-cairo`}>
        <div className='flex items-center p-16 bg-white rounded-none'>
          <Image preview={false} src={Logo} alt='rando store logo' />
        </div>

        <Menu
          className='text-base font-cairo mt-5'
          onClick={onClick}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode='inline'
          items={items}
        />
      </div>
      <div className={`flex flex-col w-full bg-extra-Light-gray ml-[200px]`}>
        <Header />
        <section className={'page-content px-10 bg-[#F7F7F7]'}>{children}</section>
      </div>
    </div>
  );
};
export default MainLayout;
