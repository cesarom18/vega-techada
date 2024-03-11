import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card } from 'react-daisyui'
import { TbReceiptTax } from 'react-icons/tb';

import { AdminLayout } from '../layout/AdminLayout';
import { OrderDetailTable } from '../components/table';
import { BreadcrumbPage } from '../components/BreadcrumbPage';
import { OrderDetailInfo } from '../components/OrderDetailInfo';
import { OrderDetailTimeline } from '../components/OrderDetailTimeline';
import { orders } from '../data';

export const OrderDetail = () => {
    const [order, setOrder] = useState(null);

    const { orderId } = useParams();

    useEffect(() => {
        setOrder((prevState) => orders.find((o) => o.id == orderId));
    }, [])

    return (
        <AdminLayout>
            <div className='flex flex-col md:flex-row justify-between items-center mb-12'>
                <BreadcrumbPage
                    pageName='Detalles Pedido'
                    pageIcon={<TbReceiptTax />} />
                <Link
                    to='/admin/my-orders'
                    className='btn btn-md btn-ghost bg-gray-800 hover:bg-gray-700 text-gray-50 w-full md:w-40 mt-4 lg:mt-0'>
                    Volver A Mis Pedidos
                </Link>
            </div>
            <div className='grid grid-cols-7 gap-4 mb-4'>
                <div className='col-span-5'>
                    <Card className='bg-gray-50 h-full'>
                        <Card.Body>
                            <Card.Title className='mb-2'>Productos asociados al pedido</Card.Title>
                            <OrderDetailTable orderProducts={order?.products}/>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-span-2'>
                    <Card className='bg-gray-50'>
                        <Card.Body>
                            <Card.Title className='mb-2'>Informacion del pedido</Card.Title>
                            <OrderDetailInfo />
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className='grid grid-cols-7 gap-4'>
                <div className='col-span-5'>
                </div>
                <div className='col-span-2'>
                    <Card className='bg-gray-50'>
                        <Card.Body>
                            <Card.Title className='mb-2'>Linea de tiempo</Card.Title>
                            <OrderDetailTimeline />
                        </Card.Body>
                    </Card>
                </div>
            </div>

        </AdminLayout>
    );
};