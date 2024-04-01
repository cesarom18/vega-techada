import { Link } from 'react-router-dom';
import { Button } from 'react-daisyui';

import { MarketplaceLayout } from '../layout/MarketplaceLayout';
import { ShoppingCartTable } from '../components/table';
import { order } from '../../data';

export const ShoppingCart = () => {
    return (
        <MarketplaceLayout
            showBanner
            bannerTitle='Carro De Compras'>
            <section className='py-20'>
                <div className='container mx-auto px-8'>
                    <div className='grid grid-cols-8 gap-4'>
                        <div className='col-span-12 lg:col-span-5'>
                            <ShoppingCartTable products={order.products} />
                        </div>
                        <div className='col-span-12 lg:col-span-3'>
                            <div className='h-full'>
                                <div className='bg-gray-800 text-gray-50 p-2'>
                                    <span className='font-semibold text-sm'>Resumen de la compra</span>
                                </div>
                                <div className='border'>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MarketplaceLayout>
    );
};