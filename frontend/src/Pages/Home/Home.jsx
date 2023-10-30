import ItemCart from '../../Components/Common/ItemCart';

const Home = () => {
  return (
    <div>
      {/* <h1 className='text-black text-3xl'>Home Page</h1> */}
      <div className='flex flex-wrap flex-grow'>
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
      </div>
    </div>
  );
};

export default Home;
