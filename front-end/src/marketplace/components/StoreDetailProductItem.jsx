import { Card, Divider, Badge } from 'react-daisyui';
import { Link } from 'react-router-dom';

export const StoreDetailProductItem = ({ id, name, offerType, image, unitType, availability, price }) => {
    return (
        <Card className='col-span-12 lg:col-span-4 bg-gray-200 rounded-lg p-4'>
            <div className='relative mb-2'>
                <Card.Image
                    src={image}
                    className='rounded-lg image-full' />
                <Badge
                    color={(availability) ? 'success' : 'error'}
                    size='md'
                    className='absolute top-2 right-2 rounded-lg font-semibold uppercase text-gray-50 p-2'>
                    {(availability) ? 'Disponible' : 'No Disponible'}
                </Badge>
            </div>
            <Card.Body className='p-0'>
                <Card.Title className='text-sm uppercase'>{name}</Card.Title>
                <Divider className='my-1' />
                <div className='text-sm mb-2'>
                    <span className='font-semibold uppercase'>Tipo Oferta</span>
                    <p className='m-0'>{offerType}</p>
                </div>
                <div className='text-sm mb-2'>
                    <span className='font-semibold uppercase'>Tipo Unidad Medida</span>
                    <p className='m-0'>{unitType}</p>
                </div>
                <Card.Actions className='flex justify-between items-center'>
                    <span className='font-semibold'>${price}</span>
                    <Link
                        to={`/marketplace/product-detail/${id}`}
                        className='btn btn-md btn-ghost bg-gray-800 hover:bg-gray-700 text-gray-50'>
                        Ver Producto
                    </Link>
                </Card.Actions>
            </Card.Body>
        </Card>
    );
};