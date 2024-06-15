import { Card, Divider, Button } from 'react-daisyui';
import { Link } from 'react-router-dom';

export const StoreDetailProductItem = ({ id, name, offerType, category, image, unitType, availability, price }) => {
    return (
        <Card
            bordered
            className='col-span-12 lg:col-span-4 shadow-sm rounded-lg p-4'>
            <div className='relative mb-2'>
                <Card.Image
                    src={image}
                    className='rounded-lg image-full' />
            </div>
            <Card.Body className='text-sm text-gray-700 p-0'>
                <Card.Title className='text-sm text-gray-800 uppercase'>{name}</Card.Title>
                <Divider className='my-1' />
                <div className='mb-2'>
                    <span className='text-gray-800 font-semibold'>Tipo Oferta</span>
                    <p className='m-0'>{offerType}</p>
                </div>
                <div className='mb-2'>
                    <span className='text-gray-800 font-semibold'>Categoria</span>
                    <p className='m-0'>{category}</p>
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