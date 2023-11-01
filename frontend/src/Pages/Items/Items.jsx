import React, { useState } from 'react';
import { Table, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '../../assets/icon/DeleteIcon';
import { useMutation, useQuery } from 'react-query';
import apiClient from '../../axios/axios';
import ModalLayout from '../../Components/Common/ModalLayout';
import DeleteModal from '../../Components/Common/DeleteModal';
import TableHeader from '../../Components/Common/TableHeader';

const ItemsPage = () => {
  // ================ Local States ====================
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [recordId, setRecordId] = useState(null);

  // ================ Navigation ====================
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
      sorter: (a, b) => a.price - b.price
    },
    {
      key: '4',
      title: 'Image Url',
      dataIndex: 'img',
      ellipsis: true,
    },
    {
      key: '7',
      title: 'Action',
      dataIndex: 'action',
      render: (_, record) => (
        <div className='ml-3'>
          <span
            className='cursor-pointer w-5'
            onClick={(e) => {
              e.stopPropagation();
              setRecordId(record.id);
              setShowDeleteModal(true);
            }}>
            <DeleteIcon />
          </span>
        </div>
      ),
    },
  ];

  // =================== onConfirm ===================
  const onConfirm = (id) => {
    return new Promise((resolve, reject) => {
      deleteItem
        .mutateAsync(id)
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  };

  // ====================== API ========================
  // ==================== GET All Items ================
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['get-all-items'],
    queryFn: () =>
      apiClient
        .get('/items')
        .then((data) => data?.data)
        .catch((err) => {
          console.log(err);
          message.error('Get All Items API Failed');
        }),
  });

  // ==================== Delete Item API =================
  const deleteItem = useMutation({
    mutationKey: ['delete-Item'],
    mutationFn: async (id) => {
      return apiClient
        .delete(`/items/${id}`)
        .then(() => {
          message.success('Item Deleted successfully');
          refetch();
        })
        .catch((err) => console.log('Error in Delete Item API', err));
    },
  });

  return (
    <>
      {/* ==================== Delete Modal ====================== */}
      <>
        <ModalLayout setIsOpen={setShowDeleteModal} isOpen={showDeleteModal} outSideClick={false}>
          <DeleteModal id={recordId} setIsOpen={setShowDeleteModal} onConfirm={onConfirm} />
        </ModalLayout>
      </>
      {/* ========================================================= */}

      <div className={`bgShadow mt-10 bg-white`}>
        <TableHeader
          title={'All Items'}
          btnText={'Add Item'}
          btnHandler={() => navigate('/items/add-item')}
        />
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
