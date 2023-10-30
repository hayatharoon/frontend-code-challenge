import { Routes, Route } from 'react-router-dom';
import { all_routes } from './routes';
import { Suspense } from 'react';
import { Spin } from 'antd';
import MainLayout from '../Layout/MainLayout';

const AppRoutes = () => {
  return (
    <Suspense
      fallback={
        <div className='h-screen flex items-center justify-center'>
          <Spin size='large' />
        </div>
      }>
      <Routes>
        {all_routes.map((route) => (
          <Route key={route.key} path={route.path} element={<MainLayout>{route.element}</MainLayout>} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
