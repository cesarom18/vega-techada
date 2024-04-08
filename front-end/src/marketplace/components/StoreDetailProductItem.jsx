import { Card, Divider, Badge, Button } from 'react-daisyui';
import { Link } from 'react-router-dom';

export const StoreDetailProductItem = ({ id, name, offerType, image, unitType, availability, price }) => {
    return (
        <Card
            bordered
            className='col-span-12 lg:col-span-4 shadow-sm rounded-lg p-4'>
            <div className='relative mb-2'>
                <Card.Image
                    src={image}
                    className='rounded-lg image-full' />
                <Badge
                    color={(availability) ? 'success' : 'error'}
                    size='md'
                    className='absolute top-2 right-2 rounded-lg font-semibold uppercase text-gray-50 p-3'>
                    {(availability) ? 'Disponible' : 'No Disponible'}
                </Badge>
            </div>
            <Card.Body className='text-sm text-gray-700 p-0'>
                <Card.Title className='text-sm text-gray-800 uppercase'>{name}</Card.Title>
                <Divider className='my-1' />
                <div className='mb-2'>
                    <span className='text-gray-800 font-semibold'>Tipo Oferta</span>
                    <p className='m-0'>{offerType}</p>
                </div>
                <div className='mb-2'>
                    <span className='text-gray-800 font-semibold'>Tipo Unidad Medida</span>
                    <p className='m-0'>{unitType}</p>
                </div>
                <Card.Actions className='flex justify-between items-center'>
                    <span className='text-gray-800 font-semibold'>${price}</span>
                    <Link to={`/marketplace/product-detail/${id}`}>
                        <Button
                            color='neutral'
                            size='md'>
                            Ver Producto
                        </Button>
                    </Link>
                </Card.Actions>
            </Card.Body>
        </Card>
    );
};