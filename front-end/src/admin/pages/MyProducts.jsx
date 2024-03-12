import { Alert, Card } from 'react-daisyui';
import { TbInfoCircle, TbShoppingCart } from 'react-icons/tb';

import { AdminLayout } from '../layout/AdminLayout';
import { MyProductTable } from '../components/table';
import { products } from '../data';

export const MyProducts = () => {
    return (
        <AdminLayout
            breadPageIcon={<TbShoppingCart/>}
            breadPageText='Mis Productos'
            breadLinkPath='/admin/register-product'
            breadLinkText='Registrar Producto'>
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