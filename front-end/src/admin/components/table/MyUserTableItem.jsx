import { Link } from 'react-router-dom';
import { Table, Button } from 'react-daisyui';
import { TbEye } from 'react-icons/tb';

export const MyUserTableItem = ({ id, fullName, email, phone, birthDate }) => {
    console.log()
    return (
        <Table.Row>
            <span>{id}</span>
            <span>{fullName}</span>
            <span>{birthDate.slice(0, 10)}</span>
            <span>{email}</span>
            <span>{phone}</span>
            <span>
                <Link to={`/admin/user-detail/${id}`}>
                    <Button
                        color='neutral'
                        startIcon={<TbEye className='hidden lg:block' />}>
                        Ver
                    </Button>
                </Link>
            </span>
        </Table.Row>
    );
};