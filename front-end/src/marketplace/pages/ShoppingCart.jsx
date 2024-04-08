import { Link } from 'react-router-dom';
import { Alert, Button, Card } from 'react-daisyui';

import { MarketplaceLayout } from '../layout/MarketplaceLayout';
import { ShoppingCartTable } from '../components/table';
import { order } from '../../data';
import { TbInfoCircle } from 'react-icons/tb';

export const ShoppingCart = () => {
    return (
        <MarketplaceLayout
            showBanner
            bannerTitle='Carro De Compras'>
            <section className='py-20'>
                <div className='container mx-auto px-8'>
                    <div className='grid grid-cols-8 gap-4'>
                        <div className='col-span-12 lg:col-span-5'>
                            <Card className='shadow-lg'>
                                <Card.Body className='p-0 pb-6'>
                                    <Card.Title className='bg-gray-800 rounded-t-lg text-gray-50 p-4'>Resumen Compra</Card.Title>
                                    {
                                        (order.length !== 0)
                                            ? <ShoppingCartTable products={order.products} />
                                            : <Alert icon={<TbInfoCircle className='text-xl' />}>No hay productos en el carrito</Alert>
                                    }
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-span-12 lg:col-span-3'>
                            <Card className='shadow-lg'>
                                <Card.Body className='p-0'>
                                    <Card.Title className='bg-gray-800 rounded-t-lg text-gray-50 p-4'>Resumen</Card.Title>
                                    <div className='flex justify-between p-4'>
                                        <span>Total</span>
                                        <span>$ {order.total}</span>
                                    </div>
                                    <div className='p-4'>
                                        <Link to='/marketplace/checkout'>
                                            <Button
                                                color='neutral'
                                                fullWidth
                                                size='md'>
                                                Proceder al checkout
                                            </Button>
                                        </Link>
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