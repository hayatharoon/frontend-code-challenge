import React from 'react';
import BackIcon from '../../assets/icon/BackIcon';
import { Button, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import apiClient from '../../axios/axios';
import { ValidationRules } from '../../Utils/Hooks/Validation';
import TableHeader from '../../Components/Common/TableHeader';

const AddItem = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const formFields = [
    {
      label: 'Name',
      name: 'name',
      rules: [ValidationRules.required],
    },
    {
      label: 'Price',
      name: 'price',
      rules: [ValidationRules.required, ValidationRules.number],
    },
    {
      label: 'Image Url',
      name: 'img',
      rules: [ValidationRules.website, ValidationRules.required],
    },
  ];
  // ========== Submit Handler ===========
  const finishHandler = (values) => {
    console.log('values', values);
    mutate(values);
  };

  // ========== Cancel Button Logic ===========
  const handleCancel = () => {
    console.log('Cancel Btn');
    form.resetFields();
    navigate('/items');
  };

  // ================== POST API ===================
  const { mutate } = useMutation({
    mutationKey: ['add-new-item'],
    mutationFn: (data) =>
      apiClient
        .post('/items', data)
        .then(() => {
          message.success('New Item is Added Successfully');
          navigate('/items');
        })
        .catch((err) => {
          console.log(err);
          message.error('Failed to Add Item');
        }),
  });

  return (
    <div className='flex flex-col gap-y-5 mt-10'>
      {/* ================ Back Button ================ */}
      <div onClick={() => navigate(-1)} className={'flex items-center gap-x-2 cursor-pointer'}>
        <BackIcon />
        <span>{'Back'}</span>
      </div>

      <div className={`w-full rounded-md h-auto bg-white bgShadow`}>
        {/* ================ Form Header ================ */}
        <TableHeader title={'Add New Item'} description={'Enter the following details below to create new Item'} />
        {/* ================ Form ================ */}
        <Form form={form} onFinish={finishHandler} layout='vertical' className='w-full lg:w-[70%] xl:w-[60%] flex flex-col  gap-y-4 p-5'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6  gap-y-4 '>
            {formFields.map(({ label, name, rules }) => (
              <Form.Item key={name} label={label} name={name} rules={rules}>
                <Input className='h-[36px] bg-[#fbfbfb]' />
              </Form.Item>
            ))}
          </div>
          {/* ================ Button ================ */}
          <div className='flex justify-end gap-[10px] items-center'>
            <Button
              className='border-[#7c047a] text-[#7c047a] font-semibold h-[36px] w-[120px] hover:!border-[#7c047a] hover:!text-[#7c047a]'
              onClick={handleCancel}>
              Cancel
            </Button>
            <Button htmlType='submit' className='bg-[#7c047a] text-[#ffffff] font-semibold h-[36px] w-[120px] hover:!text-[#ffffff]'>
              Add Item
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddItem;
