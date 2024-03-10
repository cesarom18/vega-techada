import { Alert, Card } from 'react-daisyui';
import { TbInfoCircle, TbReceipt } from 'react-icons/tb';

import { AdminLayout } from '../layout/AdminLayout';
import { MyOrderTable } from '../components/table'
import { BreadcrumbPage } from '../components/BreadcrumbPage';
import { orders } from '../data';

export const MyOrders = () => {
    return (
        <AdminLayout>
            <div className='flex flex-col md:flex-row justify-between items-center mb-12'>
                <BreadcrumbPage
                    pageName='Mis Pedidos'
                    pageIcon={<TbReceipt />} />
            </div>
            <Card className='bg-gray-50'>
                <Card.Body>
                    <Card.Title className='mb-2'>Tabla De Pedidos</Card.Title>
                    {
                        (orders.length !== 0)
                            ? <MyOrderTable orders={orders} />
                            : <Alert icon={<TbInfoCircle className='text-xl' />}>No hay pedidos registrados</Alert>
                    }
                </Card.Body>
            </Card>
        </AdminLayout>
    );
};