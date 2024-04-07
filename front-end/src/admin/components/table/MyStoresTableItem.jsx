import { Link } from 'react-router-dom';
import { Badge, Button, Table } from 'react-daisyui';
import { TbEye, TbTrash } from 'react-icons/tb';

export const MyStoresTableItem = ({ id, name, owner, available }) => {
    return (
        <Table.Row>
            <span>{id}</span>
            <span>{name}</span>
            <span>{owner}</span>
            <span>correo@gmail.com</span>
            <span>123456789</span>
            <span>
                <Badge
                    color={(available) ? 'success' : 'error'}
                    size='lg'
                    className='text-sm text-gray-50 w-[75%]'>
                    {(available) ? 'Si' : 'No'}
                </Badge>
            </span>
            <span>
                <Link to={`/admin/store-detail/${id}`}>
                    <Button
                        color='neutral'
                        size='md'
                        startIcon={<TbEye className='hidden lg:block' />}>
                        Ver
                    </Button>
                </Link>
            </span>
            <span>
                <Button
                    color='error'
                    size='md'
                    startIcon={<TbTrash className='hidden lg:block' />}
                    className='text-gray-50'>
                    Eliminar
                </Button>
            </span>
        </Table.Row>
    );
};