import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Badge, Card, Divider, Button, Input } from 'react-daisyui'
import { TbShoppingCart } from 'react-icons/tb';

import { MarketplaceLayout } from '../layout/MarketplaceLayout'
import { products } from '../../data';

export const ProductDetail = () => {
    const [product, setProduct] = useState({});

    const { productId } = useParams();

    useEffect(() => {
        setProduct((prevState) => products.find((p) => p.id == productId));
    }, [])

    return (
        <MarketplaceLayout
            showBanner
            bannerTitle='Detalle De Producto'>
            <section className='py-20'>
                <div className='container mx-auto px-8'>
                    <div className='grid grid-cols-12 gap-4'>
                        <div className='col-span-5'>
                            <img
                                src={product.image}
                                className='image-full rounded-lg h-full' />
                        </div>
                        <div className='col-span-7'>
                            <Card className='bg-gray-200 rounded-lg p-4'>
                                <Card.Body className='p-0'>
                                    <Card.Title className='flex items-center justify-between text-2xl font-semibold uppercase'>
                                        <span>{product.name}</span>
                                        <Badge
                                            color='neutral'
                                            size='lg'
                                            className='rounded-lg font-semibold uppercase text-gray-50 p-4'>
                                            ${product.price}
                                        </Badge>
                                    </Card.Title>
                                    <Divider className='my-1' />
                                    <div className='mb-2'>
                                        <span className='text-lg font-semibold'>Categoria</span>
                                        <p className='text-sm m-0'>{product.category}</p>
                                    </div>
                                    <div className='flex flex-col mb-2'>
                                        <span className='text-lg font-semibold'>Disponibilidad</span>
                                        <Badge
                                            color={(product.availability) ? 'success' : 'error'}
                                            size='md'
                                            className='rounded-lg font-semibold uppercase text-gray-50 p-2'>
                                            {(product.availability) ? 'Disponible' : 'No Disponible'}
                                        </Badge>
                                    </div>
                                    <div className='mb-2'>
                                        <span className='text-lg font-semibold'>Tipo Oferta</span>
                                        <p className='text-sm m-0'>{product.offerType}</p>
                                    </div>
                                    <div className='mb-2'>
                                        <span className='text-lg font-semibold'>Tipo Unidad</span>
                                        <p className='text-sm m-0'>{product.unitType}</p>
                                    </div>
                                    <div className='mb-2'>
                                        <Input
                                            type='number'
                                            value={1}
                                            size='md'
                                            className='w-24' />
                                    </div>
                                    <div className='mb-2'>
                                        <Button
                                            color='neutral'
                                            size='md'
                                            disabled={!product.availability}
                                            startIcon={<TbShoppingCart />}>
                                            Agregar Al Carrito
                                        </Button>
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