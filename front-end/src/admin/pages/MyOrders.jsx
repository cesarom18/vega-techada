import { Alert, Card } from 'react-daisyui';
import { TbInfoCircle, TbReceipt } from 'react-icons/tb';

import { AdminLayout } from '../layout/AdminLayout';
import { MyOrderTable } from '../components/table'
import { orders } from '../data';

export const MyOrders = () => {
    return (
        <AdminLayout
            breadPageIcon={<TbReceipt />}
            breadPageText='Mis Pedidos'
            breadLinkHidden={true}>
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