import { Link } from 'react-router-dom';
import { Button, Form, Input, Radio, Card, Divider } from 'react-daisyui';

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
                            <Card
                                bordered
                                className='shadow-lg'>
                                <Card.Body className='text-gray-700'>
                                    <Card.Title className='text-gray-800'>Informacion Del Usuario</Card.Title>
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
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-span-12 lg:col-span-3'>
                            <Card
                                bordered
                                className='shadow-lg mb-4'>
                                <Card.Body className='text-gray-700 p-0'>
                                    <Card.Title className='bg-gray-800 rounded-t-lg text-gray-50 p-4'>Resumen de la compra</Card.Title>
                                    <div className='p-4'>
                                        <div className='mb-2'>
                                            <span className='font-semibold text-gray-800 text-lg'>Productos</span>
                                        </div>
                                        <ul className='flex flex-col gap-2'>
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
                                        <Divider className='my-2' />
                                        <div className='flex justify-between text-gray-800 text-lg font-semibold p-2'>
                                            <span>Total</span>
                                            <span>$ 12</span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card
                                bordered
                                className='shadow-lg mb-4'>
                                <Card.Body className='text-gray-700 p-0'>
                                    <Card.Title className='bg-gray-800 rounded-t-lg text-gray-50 p-4'>Metodo De Pago</Card.Title>
                                    <div className='p-4'>
                                        <ul>
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
                                        <Divider className='my-2' />
                                        <Card.Actions className='justify-center items-center'>
                                            <Link
                                                to=''
                                                className='w-full'>
                                                <Button
                                                    color='neutral'
                                                    fullWidth
                                                    type='submit'
                                                    size='md'>
                                                    Realizar Pedido
                                                </Button>
                                            </Link>
                                        </Card.Actions>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </Form>
                </div>
            </section>
        </MarketplaceLayout>
    );
};