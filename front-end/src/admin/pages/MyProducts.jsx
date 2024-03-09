import { Link } from 'react-router-dom';
import { Alert, Card } from 'react-daisyui';
import { TbInfoCircle, TbShoppingCart } from 'react-icons/tb';

import { AdminLayout } from '../layout/AdminLayout';
import { MyProductTable } from '../components/table';
import { BreadcrumbPage } from '../components/BreadcrumbPage';
import { products } from '../data';

export const MyProducts = () => {
    return (
        <AdminLayout>
            <div className='flex flex-col md:flex-row justify-between items-center mb-12'>
                <BreadcrumbPage
                    pageName='Mis Productos'
                    pageIcon={<TbShoppingCart />} />
                <Link
                    to='/admin/register-product'
                    className='btn btn-md btn-ghost bg-gray-800 hover:bg-gray-700 text-gray-50 w-full md:w-40 mt-4 lg:mt-0'>
                    Registrar Producto
                </Link>
            </div>
            <Card className='bg-gray-50'>
                <Card.Body>
                    <Card.Title className='mb-2'>Tabla De Productos</Card.Title>
                    {
                        (products.length !== 0)
                            ? <MyProductTable products={products} />
                            : <Alert icon={<TbInfoCircle className='text-xl' />}>No hay productos registrados</Alert>
                    }
                </Card.Body>
            </Card>
        </AdminLayout>
    );
};