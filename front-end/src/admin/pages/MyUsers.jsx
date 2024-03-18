import { Alert, Card } from 'react-daisyui';
import { TbInfoCircle, TbUser } from 'react-icons/tb'

import { AdminLayout } from '../layout/AdminLayout';
import { MyUserTable } from '../components/table';
import { users } from '../data/test';

export const MyUsers = () => {
    return (
        <AdminLayout
            breadPageIcon={<TbUser />}
            breadPageText='Mis Usuarios'
            breadLinkText='Registrar Usuario'
            breadLinkPath='/admin/register-user'>
            <Card className='bg-gray-50'>
                <Card.Body>
                    <Card.Title className='mb-2'>Tabla De Usuarios</Card.Title>
                    {
                        (users.length !== 0)
                            ? <MyUserTable users={users} />
                            : <Alert icon={<TbInfoCircle className='text-xl' />}>No hay usuarios registrados</Alert>
                    }
                </Card.Body>
            </Card>
        </AdminLayout>
    );
};