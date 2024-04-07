import { Link } from 'react-router-dom';
import { Button, Table } from 'react-daisyui';
import { TbEye, TbTrash } from 'react-icons/tb';

import { stateTypeValues } from '../../../data/variables';

export const MyOrderTableItem = ({ id, client, orderState, date, total }) => {
    return (
        <Table.Row>
            <span>{id}</span>
            <span>{client}</span>
            <span>{date.toISOString().slice(0, 10)}</span>
            <span>12:00</span>
            <span>{stateTypeValues[orderState[orderState?.length - 1]?.stateType]}</span>
            <span>${total}</span>
            <span>
                <Link
                    to={`/admin/order-detail/${id}`}
                    className='btn btn-md btn-ghost bg-gray-800 hover:bg-gray-700 text-gray-50'>
                    <TbEye className='hidden lg:block' />
                    Ver
                </Link>
            </span>
            <span>
                <Button
                    size='md'
                    color='error'
                    className='text-gray-50'>
                    <TbTrash className='hidden lg:block' />
                    Eliminar
                </Button>
            </span>
        </Table.Row>
    );
};