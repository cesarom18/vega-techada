import { Alert, Card } from 'react-daisyui';
import { TbBuildingStore, TbInfoCircle } from 'react-icons/tb';

import { AdminLayout } from '../layout/AdminLayout';
import { MyStoresTable } from '../components/table';
import { stores } from '../../data';

export const MyStores = () => {
    return (
        <AdminLayout
            breadPageIcon={<TbBuildingStore />}
            breadPageText='Mis Tiendas'
            breadLinkPath='/admin/register-store'
            breadLinkText='Registrar Tienda'>
            <Card className='bg-gray-50'>
                <Card.Body>
                    <Card.Title className='mb-2'>Tabla De Tiendas</Card.Title>
                    {
                        (stores.length !== 0)
                            ? <MyStoresTable stores={stores} />
                            : <Alert icon={<TbInfoCircle className='text-xl' />}>No hay tiendas registradas</Alert>
                    }
                </Card.Body>
            </Card>
        </AdminLayout>
    );
};