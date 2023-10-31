import React from 'react';

const HomePage = React.lazy(() => import('../Pages/Home/Home'));
const Items = React.lazy(() => import('../Pages/Items/Items'));
const AddItem = React.lazy(() => import('../Pages/Items/AddItem'))
const Cart = React.lazy(() => import('../Pages/Cart/Cart'));

export const all_routes = [
  {
    key: 'home',
    path: '/',
    isPrivate: true,
    element: <HomePage />,
  },
  {
    key: 'items',
    path: '/items',
    isPrivate: true,
    element: <Items />,
  },
  {
    key: 'add-items',
    path: '/items/add-item',
    isPrivate: true,
    element: <AddItem />,
  },
  {
    key: 'cart',
    path: '/cart',
    isPrivate: true,
    element: <Cart />,
  },
];
