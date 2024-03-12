import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-daisyui';
import { TbShoppingCartCog } from 'react-icons/tb';

import { AdminLayout } from '../layout/AdminLayout';
import { ProductDetailForm } from '../components/form';
import { products } from '../data';

export const ProductDetail = () => {
    const [product, setProduct] = useState(null);

    const { productId } = useParams();

    useEffect(() => {
        setProduct((prevState) => products.find((p) => p.id == productId));
    }, []);

    return (
        <AdminLayout
            breadPageIcon={<TbShoppingCartCog />}
            breadPageText='Detalles Del Producto'
            breadLinkPath='/admin/my-products'
            breadLinkText='Volver A Mis Productos'>
            <Card className='bg-gray-50'>
                <Card.Body>
                    <Card.Title className='mb-2'>Detalles Del Producto</Card.Title>
                    <ProductDetailForm />
                </Card.Body>
            </Card>
        </AdminLayout>
    );
};