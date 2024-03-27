import { Link } from 'react-router-dom';
import { Card, Divider } from 'react-daisyui';

export const StoresItem = ({ name, owner, productCategories, description, image }) => {
  return (
    <Card className='grid grid-cols-6 gap-4 bg-gray-200 rounded-lg mb-4 p-4'>
      <div className='col-span-12 lg:col-span-2'>
        <img
          src={image}
          className='rounded-lg w-full h-full' />
      </div>
      <div className='col-span-12 lg:col-span-4 '>
        <Card.Title className='uppercase mb-2'>
          {name}
        </Card.Title>
        <Divider className='my-1' />
        <div className='text-sm mb-2'>
          <span className='font-semibold uppercase'>Dueño</span>
          <p className='text-justify mb-0'>
            {owner}
          </p>
        </div>
        <div className='text-sm mb-2'>
          <span className='font-semibold uppercase'>Principales Rubros</span>
          <ul className='list-disc pl-4'>
            {
              productCategories.map((p, i) => (
                <li key={i}>{p}</li>
              ))
            }
          </ul>
        </div>
        <div className='text-sm mb-2'>
          <span className='font-semibold uppercase'>Descripcion</span>
          <p className='text-justify mb-0'>
            {description}
          </p>
        </div>
        <div className='flex justify-end'>
          <Link
            to=''
            className='btn btn-md btn-ghost bg-gray-800 hover:bg-gray-700 text-gray-50'>
            Ver Tienda
          </Link>
        </div>
      </div>
    </Card >
  );
};
