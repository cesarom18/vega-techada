import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-daisyui'
import { TbReceiptTax } from 'react-icons/tb';

import { AdminLayout } from '../layout/AdminLayout';
import { OrderDetailTable } from '../components/table';
import { OrderDetailInfo } from '../components/OrderDetailInfo';
import { OrderDetailTimeline } from '../components/OrderDetailTimeline';
import { orders } from '../data';

export const OrderDetail = () => {
  const [order, setOrder] = useState(null);

  const { orderId } = useParams();

  useEffect(() => {
    setOrder((prevState) => orders.find((o) => o.id == orderId));
  }, []);

  return (
    <AdminLayout
      breadPageIcon={<TbReceiptTax />}
      breadPageText='Detalle Pedido'
      breadLinkPath='/admin/my-orders'
      breadLinkText='Volver A Mis Pedidos'>
      <div className='grid grid-cols-5 gap-4 mb-4'>
        <div className='col-span-12 lg:col-span-3'>
          <Card className='bg-gray-50 h-full'>
            <Card.Body>
              <Card.Title className='mb-2'>Productos asociados al pedido</Card.Title>
              <OrderDetailTable orderProducts={order?.products} />
            </Card.Body>
          </Card>
        </div>
        <div className='col-span-12 lg:col-span-2'>
          <Card className='bg-gray-50 h-full'>
            <Card.Body>
              <Card.Title className='mb-2'>Informacion del pedido #{order?.id}</Card.Title>
              <OrderDetailInfo />
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className='grid grid-cols-12'>
        <div className='col-span-12'>
          <Card className='bg-gray-50'>
            <Card.Body>
              <Card.Title className='mb-2'>Linea de tiempo</Card.Title>
              <OrderDetailTimeline orderState={order?.orderState} />
            </Card.Body>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};
