import { Link } from 'react-router-dom'
import { Card } from 'react-daisyui';
import { TbShoppingCartPlus } from 'react-icons/tb';

import { AdminLayout } from '../layout/AdminLayout';
import { ProductRegistrationForm } from '../components/form';
import { BreadcrumbPage } from '../components/BreadcrumbPage';

export const RegisterProduct = () => {
    return (
        <AdminLayout>
            <div className='flex flex-col md:flex-row justify-between items-center mb-12'>
                <BreadcrumbPage
                    pageName='Registrar Producto'
                    pageIcon={<TbShoppingCartPlus />} />
                <Link
                    to='/admin/my-products'
                    className='btn btn-md btn-ghost bg-gray-800 hover:bg-gray-700 text-gray-50 w-full md:w-40 mt-4 lg:mt-0'>
                    Volver A Mis Productos
                </Link>
            </div>
            <Card className='bg-gray-50'>
                <Card.Body>
                    <Card.Title className='mb-2'>Registrar De Producto</Card.Title>
                    <ProductRegistrationForm />
                </Card.Body>
            </Card>
        </AdminLayout>
    );
};