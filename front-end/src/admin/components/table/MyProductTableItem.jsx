import { Link } from 'react-router-dom';
import { Table, Button, Badge } from 'react-daisyui';
import { TbEye, TbTrash } from 'react-icons/tb';

import { offerTypeValues, unitTypeValues } from '../../../data';

export const MyProductTableItem = ({ id, name, offerType, category, unitType, stock, availability, price }) => {
  return (
    <Table.Row>
      <span>{id}</span>
      <span>{name}</span>
      <span>{offerTypeValues[offerType]}</span>
      <span>{category}</span>
      <span>{unitTypeValues[unitType]}</span>
      <span>{stock}</span>
      <span>
        <Badge
          color={(availability) ? 'success' : 'error'}
          size='lg'
          className='text-sm text-gray-50 w-[75%]'>
          {(availability) ? 'Si' : 'No'}
        </Badge>
      </span>
      <span>${price}</span>
      <span>
        <Link
          to={`/admin/product-detail/${id}`}>
          <Button
            color='neutral'
            size='md'
            startIcon={<TbEye className='hidden lg:block'/>}>
            Ver
          </Button>
        </Link>
      </span>
      <span>
        <Button
          size='md'
          color='error'
          startIcon={<TbTrash className='hidden lg:block' />}
          className='text-gray-50'>
          Eliminar
        </Button>
      </span>
    </Table.Row>
  );
};
