import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card } from 'react-daisyui';
import { TbShoppingCartCog } from 'react-icons/tb';

import { AdminLayout } from '../layout/AdminLayout';
import { ProductDetailForm } from '../components/form';
import { BreadcrumbPage } from '../components/BreadcrumbPage'
import { products } from '../data';

export const ProductDetail = () => {
    const [product, setProduct] = useState(null);

    const { productId } = useParams();

    useEffect(() => {
        setProduct((prevState) => products.find((p) => p.id == productId));
    }, []);

    return (
        <AdminLayout>
            <div className='flex flex-col md:flex-row justify-between items-center mb-12'>
                <BreadcrumbPage
                    pageIcon={<TbShoppingCartCog />}
                    pageName='Detalle Producto' />
                <Link
                    to='/admin/my-products'
                    className='btn btn-md btn-ghost bg-gray-800 hover:bg-gray-700 text-gray-50 w-full md:w-40 mt-4 lg:mt-0'>
                    Volver A Mis Productos
                </Link>
            </div>
            <Card className='bg-gray-50'>
                <Card.Body>
                    <Card.Title className='mb-2'>Detalles Del Producto</Card.Title>
                    <ProductDetailForm />
                </Card.Body>
            </Card>
        </AdminLayout>
    );
};