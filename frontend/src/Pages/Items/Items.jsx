import React from 'react';
import { Button, Table, message } from 'antd'
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '../../assets/icon/DeleteIcon';
import { useQuery } from 'react-query';
import apiClient from '../../axios/axios';
import ModalLayout from '../../Components/Common/ModalLayout';
import DeleteModal from '../../Components/Common/DeleteModal';

const ItemsPage = () => {
  const navigate = useNavigate();

  const columns = [
    {
      key: '1',
      title: 'Ticket ID',
      dataIndex: 'id',
    },
    {
      key: '2',
      title: 'Item Name',
      dataIndex: 'name',
    },
    {
      key: '3',
      title: 'Price',
      dataIndex: 'price',
    },
    {
      key: '4',
      title: 'Image Url',
      dataIndex: 'img',
    },
    {
      key: '7',
      title: 'Action',
      dataIndex: 'action',
      render: (_, record) => (
        <div className="ml-3">
          <span
            className='cursor-pointer w-5'
            onClick={(e) => {
              e.stopPropagation();
              console.log('Clicked Delete')
            }}
          >
            <DeleteIcon />
          </span>
        </div>
      )
    },
  ];


  // ==================== GET All Items ================
  const { data, isLoading } = useQuery({
    queryKey: ['get-all-items'],
    queryFn: () => apiClient.get('/items')
      .then(data => data?.data)
      .catch(err => {
        console.log(err);
        message.error('Get All Items API Failed');
      })
  });

  return (
    <>
      <>
        <ModalLayout setIsOpen={setShowDeleteModal} isOpen={showDeleteModal} outSideClick={false}>
          <DeleteRecord id={deleteId} setIsOpen={setShowDeleteModal} onConfirm={onConfirm} />
        </ModalLayout>
      </>
      <div className={`bgShadow mt-10`}>
        <div className="flex items-center justify-between bg-white px-[16px] py-4 border-b border-border-gray rounded-t-xl">

          <div className="">
            <h1 className="primary-heading">{'All Items'}</h1>
          </div>

          <Button
            className={'ternary-btn font-cairo text-[14px] py-4 w-[120px] bg-theme-color text-[#ffff] hover:!text-[#ffff]'}
            onClick={() => navigate('/items/add-item')}
          >
            Add Item
          </Button>
        </div>

        <Table
          columns={columns}
          dataSource={data}
          loading={isLoading}
          pagination={false}
        />

      </div>
    </>
  );
};

export default ItemsPage;
