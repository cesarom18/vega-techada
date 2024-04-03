import { Link } from 'react-router-dom';
import { Button, Form, Input, Radio } from 'react-daisyui';

import { MarketplaceLayout } from '../layout/MarketplaceLayout';

export const Checkout = () => {
    return (
        <MarketplaceLayout
            showBanner
            bannerTitle='Checkout'>
            <section className='py-20'>
                <div className='container mx-auto px-8'>
                    <Form className='grid grid-cols-8 gap-x-12'>
                        <div className='col-span-12 lg:col-span-5'>
                            <div className='mb-4'>
                                <span className='text-2xl font-semibold'>Informacion Del Usuario</span>
                            </div>
                            <div className='grid grid-cols-12 gap-4'>
                                <div className='col-span-12 lg:col-span-6 mb-4'>
                                    <Form.Label title='Nombre Completo' />
                                    <Input
                                        type='text'
                                        name='fullName'
                                        placeholder='Ingresa tu nombre completo'
                                        className='w-full' />
                                </div>
                                <div className='col-span-12 lg:col-span-6 mb-4'>
                                    <Form.Label title='RUT' />
                                    <Input
                                        type='text'
                                        name='fullName'
                                        placeholder='Ingresa tu RUT'
                                        className='w-full' />
                                </div>
                                <div className='col-span-12 lg:col-span-6 mb-4'>
                                    <Form.Label title='Correo Electronico' />
                                    <Input
                                        type='text'
                                        name='fullName'
                                        placeholder='Ingresa tu correo electronico'
                                        className='w-full' />
                                </div>
                                <div className='col-span-12 lg:col-span-6 mb-4'>
                                    <Form.Label title='Numero telefonico' />
                                    <Input
                                        type='text'
                                        name='fullName'
                                        placeholder='Ingresa tu numero telefonico'
                                        className='w-full' />
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-3'>
                            <div className='mb-4'>
                                <div className='bg-gray-800 text-gray-50 p-4'>
                                    <span className='font-bold text-2xl'>Resumen de la compra</span>
                                </div>
                                <div className='border'>
                                    <div className='p-4'>
                                        <div className='mb-2'>
                                            <span className='font-semibold text-lg'>Productos</span>
                                        </div>
                                        <ul className='text-gray-600'>
                                            <li className='flex justify-between'>
                                                <span>Producto 1</span>
                                                <span>$ 5</span>
                                            </li>
                                            <li className='flex justify-between'>
                                                <span>Producto 1</span>
                                                <span>$ 5</span>
                                            </li>
                                            <li className='flex justify-between'>
                                                <span>Producto 1</span>
                                                <span>$ 5</span>
                                            </li>
                                            <li className='flex justify-between'>
                                                <span>Producto 1</span>
                                                <span>$ 5</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='border-t flex justify-between text-lg font-semibold p-4'>
                                        <span>Total</span>
                                        <span>$ 12</span>
                                    </div>
                                </div>
                            </div>
                            <div className='mb-4'>
                                <div className='bg-gray-800 text-gray-50 p-4'>
                                    <span className='font-bold text-2xl'>Metodo De Pago</span>
                                </div>
                                <div className='border'>
                                    <div className='p-4'>
                                        <ul className='text-gray-600'>
                                            <li className='flex justify-start items-center gap-2'>
                                                <Radio
                                                    name='paymentMethod'
                                                    defaultChecked />
                                                <Form.Label title='Retiro en local' />
                                            </li>
                                            <li className='flex justify-start items-center gap-2'>
                                                <Radio name='paymentMethod' />
                                                <Form.Label title='Transferencia bancaria' />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='border-t p-4'>
                                        <Link to=''>
                                            <Button
                                                color='neutral'
                                                fullWidth
                                                type='submit'
                                                size='md'
                                                className='text-lg font-semibold'>
                                                Realizar Pedido
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                </div>
            </section>
        </MarketplaceLayout>
    );
};