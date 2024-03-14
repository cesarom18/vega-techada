import { Table, Button, Badge } from 'react-daisyui';
import { TbPlus, TbMinus } from 'react-icons/tb';

import { offerTypeValues } from '../../../data';

export const OrderDetailTableItem = ({ name, offerType, category, availability, amount, price }) => {
  return (
    <Table.Row>
      <div className='font-normal'>{name}</div>
      <div>{offerTypeValues[offerType]}</div>
      <div>{category}</div>
      <div>
        <Badge
          color={(availability) ? 'success' : 'error'}
          size='lg'
          className='text-sm text-gray-50 w-[75%]'>
          {(availability) ? 'Si' : 'No'}
        </Badge>
      </div>
      <div>${price}</div>
      <div className='flex justify-center items-center gap-4'>
        <Button
          color='ghost'
          size='sm'
          className='bg-gray-800 hover:bg-gray-700 text-gray-50'>
          <TbMinus />
        </Button>
        <span>{amount}</span>
        <Button
          color='ghost'
          size='sm'
          className='bg-gray-800 hover:bg-gray-700 text-gray-50'>
          <TbPlus />
        </Button>
      </div>
    </Table.Row>
  );
};
