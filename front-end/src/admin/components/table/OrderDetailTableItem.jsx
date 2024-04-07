import { Table, Badge, Input } from 'react-daisyui';

import { offerTypeValues } from '../../../data';

export const OrderDetailTableItem = ({ name, offerType, category, availability, amount, price }) => {
  return (
    <Table.Row>
      <span className='font-normal'>{name}</span>
      <span>{offerTypeValues[offerType]}</span>
      <span>{category}</span>
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
        <Input
          type='number'
          min={1}
          defaultValue={amount}
          size='md'
          className='w-24' />
      </span>
    </Table.Row>
  );
};
