import { Form } from 'antd';
import React from 'react';
import CommonBtn from '../CommonBtn';

const DeleteModal = ({ setIsOpen }) => {
  return (
    <>
      <div className='flex flex-col gap-y-3 font-cairo'>
        <div className='w-[464px] h-auto bg-white bgShadow rounded-md'>
          <header className='text-center p-5 border-b border-border-gray'>
            <h1 className='text-dark-red font-semibold text-xl'>Delete Confirmation</h1>
          </header>
          <Form layout='vertical' className='custom-select flex flex-col gap-y-3 p-5'>
            <section className='bg-dark-red/20 py-4 px-2 text-center'>
              <span>Are you sure you want to delete this ?</span>
            </section>
            <div className='flex items-center justify-center gap-x-4 mt-4 '>
              <CommonBtn
                text={'Cancel'}
                onClick={() => setIsOpen(false)}
                className={'font-cairo ternary-btn text-dark-red border-dark-red py-5 fon'}
              />
              <CommonBtn text={'Delete'} onClick={() => setIsOpen(false)} className={'font-cairo primary-btn border-dark-red bg-dark-red py-5'} />
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;
