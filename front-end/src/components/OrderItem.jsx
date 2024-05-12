import { Link } from 'react-router-dom';
import { Button, Card, Divider } from 'react-daisyui';
import { TbTrash } from 'react-icons/tb';

export const OrderItem = ({ shop, products, states, paymentMethod, creationDate, total }) => {
    return (
        <Card className='bg-gray-100 rounded-lg mb-4 p-4'>
            <Card.Body className='p-0'>
                <Card.Title className='font-bold uppercase text-lg'>Pedido en {shop}</Card.Title>
                <Divider className='my-1' />
                <div className='grid grid-cols-12'>
                    <div className='col-span-6 flex flex-col gap-1 mb-2'>
                        <span className='font-semibold'>Fecha de solicitud</span>
                        <span>{creationDate.slice(0, 10)}</span>
                    </div>
                    <div className='col-span-6 flex flex-col gap-1 mb-2'>
                        <span className='font-semibold'>Estado actual del pedido</span>
                        <span>{states[states.length - 1].state}</span>
                    </div>
                </div>
                <div className='grid grid-cols-12'>
                    <div className='col-span-6 flex flex-col gap-1 mb-2'>
                        <span className='font-semibold'>Cantidad de productos</span>
                        <span>{products.length}</span>
                    </div>
                    <div className='col-span-6 flex flex-col gap-1 mb-2'>
                        <span className='font-semibold'>Precio total del pedido</span>
                        <span>$ {total}</span>
                    </div>
                </div>
                <div className='grid grid-cols-12'>
                    <div className='col-span-6 flex flex-col gap-1 mb-2'>
                        <span className='font-semibold'>Metodo de pago utilizado</span>
                        <span>{paymentMethod}</span>
                    </div>
                    <div className='col-span-6 flex flex-col gap-1 mb-2'>
                        <span className='font-semibold'>Metodo de pago utilizado</span>
                        <span>{paymentMethod}</span>
                    </div>
                </div>
                <Card.Actions className='flex justify-end items-center'>
                    <Link to=''>
                        <Button
                            color='error'
                            size='md'
                            startIcon={<TbTrash />}
                            className='text-gray-50'>
                            Cancelar Pedido
                        </Button>
                    </Link>
                </Card.Actions>
            </Card.Body>
        </Card>
    );
};