import React from 'react';
import { Form, Button } from 'antd';

const DeleteModal = ({
  id,
  setIsOpen,
  onConfirm = () => {
    console.log('Default confirm function for delete confirm, replace this functions by passing onConfirm function to it.');
  },
}) => {
  // ============= onDelete Handler ==================
  const onDelete = () => {
    onConfirm(id)
      .then(() => {
        setIsOpen(false);
      })
      .catch((err) => {
        console.log('Error', err?.response?.data?.errors[0]);
      });
  };
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
              <Button className={'font-cairo ternary-btn text-dark-red border-dark-red py-5 fon'} onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button className={'font-cairo ternary-btn border-dark-red bg-dark-red py-5'} onClick={onDelete}>
                Delete
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;
