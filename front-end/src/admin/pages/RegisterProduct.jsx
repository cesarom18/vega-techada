import { Card } from 'react-daisyui';
import { TbShoppingCartPlus } from 'react-icons/tb';

import { AdminLayout } from '../layout/AdminLayout';
import { ProductRegistrationForm } from '../components/form';

export const RegisterProduct = () => {
    return (
        <AdminLayout
            breadPageIcon={<TbShoppingCartPlus />}
            breadPageText='Registrar Producto'
            breadLinkPath='/admin/my-products'
            breadLinkText='Volver A Mis Productos'>
            <Card className='bg-gray-50'>
                <Card.Body>
                    <Card.Title className='mb-2'>Registrar De Producto</Card.Title>
                    <ProductRegistrationForm />
                </Card.Body>
            </Card>
        </AdminLayout>
    );
};