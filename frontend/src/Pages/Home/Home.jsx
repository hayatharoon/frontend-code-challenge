import { useQuery } from 'react-query';
import ItemCart from '../../Components/Home/ItemCart';
import apiClient from '../../axios/axios';
import { Spin } from 'antd';

const Home = () => {
  // ==================== GET All Items ====================
  const { data, isLoading } = useQuery({
    queryKey: ['get-all-items'],
    queryFn: () => apiClient.get('/items').then((data) => data?.data),
  });

  return (
    <>
      {isLoading ? (
        <div className='h-screen w-full flex justify-center items-center'>
          <Spin size='large' />
        </div>
      ) : (
        <div className='flex flex-wrap flex-grow'>
          {data?.map(({ id, name, price, img }) => (
            <ItemCart key={id} id={id} name={name} price={price} img={img} />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
