import { Card } from 'react-daisyui';
import { TbFilePencil } from 'react-icons/tb';

import { AdminLayout } from '../layout/AdminLayout';
import { StoreDetailForm } from '../components/form';

export const StroreDetail = () => {
    return (
        <AdminLayout
            breadPageIcon={<TbFilePencil />}
            breadPageText='Detalles Tienda'
            breadLinkPath='/admin/my-stores'
            breadLinkText='Volver A Mis Tiendas'>
            <Card className='bg-gray-50'>
                <Card.Body>
                    <Card.Title className='mb-2'>Detalles De La Tienda</Card.Title>
                    <StoreDetailForm />
                </Card.Body>
            </Card>
        </AdminLayout>
    );
};