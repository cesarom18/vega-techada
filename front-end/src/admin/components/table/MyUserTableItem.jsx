import { Link } from 'react-router-dom';
import { Table } from 'react-daisyui';
import { TbEye } from 'react-icons/tb';

export const MyUserTableItem = ({ id, fullName, email, phone, birthDate }) => {
    return (
        <Table.Row>
            <div>{id}</div>
            <div>{fullName}</div>
            <div>{birthDate.slice(0,10)}</div>
            <div>{email}</div>
            <div>{phone}</div>
            <div>
                <Link
                    to={`/admin/user-detail/${id}`}
                    className='btn btn-md btn-ghost bg-gray-800 hover:bg-gray-700 text-gray-50'>
                    <TbEye className='hidden lg:block' />
                    Ver
                </Link>
            </div>
        </Table.Row>
    );
};