import { Card } from 'react-daisyui';
import { TbFilePlus } from 'react-icons/tb';

import { AdminLayout } from '../layout/AdminLayout';
import { StoreRegisterForm } from '../components/form';

export const RegisterStore = () => {
    return (
        <AdminLayout
            breadPageIcon={<TbFilePlus />}
            breadPageText='Registrar Tienda'
            breadLinkPath='/admin/my-stores'
            breadLinkText='Volver A Mis Tiendas'>
            <Card className='bg-gray-50'>
                <Card.Body>
                    <Card.Title className='mb-2'>Registrar Tienda</Card.Title>
                    <StoreRegisterForm />
                </Card.Body>
            </Card>
        </AdminLayout>
    );
};