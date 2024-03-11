import { Table, Button } from 'react-daisyui';
import { TbPlus, TbMinus } from 'react-icons/tb'

export const OrderDetailTableItem = ({ name, offerType, category, availability, amount, price }) => {
    return (
        <Table.Row>
            <div>{name}</div>
            <div>{offerType}</div>
            <div>{category}</div>
            <div>{availability}</div>
            <div>${price}</div>
            <div className='flex justify-center items-center gap-4'>
                <Button
                    color='ghost'
                    size='md'
                    className='bg-gray-800 hover:bg-gray-700 text-gray-50'>
                    <TbMinus />
                </Button>
                <span>{amount}</span>
                <Button
                    color='ghost'
                    size='md'
                    className='bg-gray-800 hover:bg-gray-700 text-gray-50'>
                    <TbPlus />
                </Button>
            </div>
        </Table.Row>
    );
};