import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Badge, Card, Divider } from 'react-daisyui';

import { MarketplaceLayout } from '../layout/MarketplaceLayout';
import { products } from '../data';

export const ProductDetail = () => {
    const [product, setProduct] = useState({});

    const { productId } = useParams();

    useEffect(() => {
        setProduct((prevState) => products.find((p) => p.id == productId));
    }, [])

    return (
        <MarketplaceLayout
            showBanner
            bannerTitle='Detalle De Producto'
            footerTheme='dark'>
            <section className='py-20'>
                <div className='container mx-auto px-8'>
                    <div className='grid grid-cols-12 gap-4'>
                        <div className='col-span-12 lg:col-span-5'>
                            <img
                                src={product.image}
                                className='image-full rounded-lg w-full h-full' />
                        </div>
                        <div className='col-span-12 lg:col-span-7'>
                            <Card
                                bordered
                                className='rounded-lg shadow-sm p-4 h-full'>
                                <Card.Body className='text-gray-700 text-sm p-0'>
                                    <Card.Title className='flex items-center justify-between text-xl font-semibold uppercase'>
                                        <span className='text-gray-800'>{product.name}</span>
                                        <Badge
                                            color='neutral'
                                            size='lg'
                                            className='rounded-lg font-semibold uppercase text-gray-50 p-4'>
                                            ${product.price}
                                        </Badge>
                                    </Card.Title>
                                    <Divider className='my-1' />
                                    <div className='mb-2'>
                                        <span className='text-lg text-gray-800 font-semibold'>Categoria</span>
                                        <p className='m-0'>{product.category}</p>
                                    </div>
                                    <div className='mb-2'>
                                        <span className='text-lg text-gray-800 font-semibold'>Tipo Oferta</span>
                                        <p className='text-sm m-0'>{product.offerType}</p>
                                    </div>
                                    <div className='mb-2'>
                                        <span className='text-lg text-gray-800 font-semibold'>Tipo Unidad</span>
                                        <p className='text-sm m-0'>{product.unitType}</p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </MarketplaceLayout>
    );
};