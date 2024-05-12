import { Table, Button, Input } from 'react-daisyui';
import { TbX } from 'react-icons/tb';

export const ShoppingCartTableItem = ({ name, price, amount }) => {
    return (
        <Table.Row>
            <span className='font-normal'>{name}</span>
            <span>$ {price}</span>
            <span>
                <Input
                    type='number'
                    min={1}
                    defaultValue={amount}
                    size='md'
                    className='w-24' />
            </span>
            <span>$ {amount * price}</span>
            <Button
                color='error'
                size='md'
                startIcon={<TbX />}
                className='text-gray-50' />
        </Table.Row>
    );
};