import { Link } from 'react-router-dom';
import { Button, Table } from 'react-daisyui';
import { TbEye, TbTrash } from 'react-icons/tb';

export const MyOrderTableItem = ({ id, name, state, date, products, total }) => {
    return (
        <Table.Row>
            <div>{id}</div>
            <div>{name}</div>
            <div>{state}</div>
            <div>{date.toISOString().slice(0, 10)}</div>
            <div>{products.length}</div>
            <div>${total}</div>
            <div>
                <Link
                    to={`/admin/order-detail/${id}`}
                    className='btn btn-md btn-ghost bg-gray-800 hover:bg-gray-700 text-gray-50'>
                    <TbEye className='hidden lg:block' />
                    Ver
                </Link>
            </div>
            <div>
                <Button
                    size='md'
                    color='error'
                    className='text-gray-50'>
                    <TbTrash className='hidden lg:block' />
                    Eliminar
                </Button>
            </div>
        </Table.Row>
    );
};