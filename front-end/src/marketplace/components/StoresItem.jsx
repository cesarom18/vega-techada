import { Link } from 'react-router-dom';
import { Button, Card, Divider } from 'react-daisyui';

export const StoresItem = ({ id, name, owner, productCategories, description, image }) => {
  return (
    <Card bordered className='grid grid-cols-6 gap-4 rounded-lg shadow-sm mb-4 p-4'>
      <div className='col-span-12 lg:col-span-2'>
        <Card.Image
          src={image}
          className='rounded-lg w-full' />
      </div>
      <div className='col-span-12 lg:col-span-4 '>
        <Card.Body className='text-sm text-gray-700 p-0'>
          <Card.Title className='text-gray-800 uppercase'>
            {name}
          </Card.Title>
          <Divider className='my-1' />
          <div className='mb-2'>
            <span className='text-gray-800 font-semibold'>Dueño</span>
            <p className='text-justify mb-0'>
              {owner}
            </p>
          </div>
          <div className='mb-2'>
            <span className='text-gray-800 font-semibold'>Principales Rubros</span>
            <ul className='list-disc pl-4'>
              {
                productCategories.map((p, i) => (
                  <li key={i}>{p}</li>
                ))
              }
            </ul>
          </div>
          <div className='mb-2'>
            <span className='text-gray-800 font-semibold'>Descripcion</span>
            <p className='text-justify mb-0'>
              {description}
            </p>
          </div>
          <Card.Actions className='block lg:flex justify-end'>
            <Link to={`/marketplace/store-detail/${id}`}>
              <Button
                color='neutral'
                size='md'
                className='w-full lg:w-40'>
                Ver Tienda
              </Button>
            </Link>
          </Card.Actions>
        </Card.Body>
      </div>
    </Card >
  );
};
