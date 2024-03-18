import { Card } from 'react-daisyui';
import { TbUserPlus } from 'react-icons/tb';

import { AdminLayout } from '../layout/AdminLayout';
import { UserRegisterForm } from '../components/form'

export const RegisterUser = () => {
    return (
        <AdminLayout
            breadPageIcon={<TbUserPlus />}
            breadPageText='Registrar Usuario'
            breadLinkPath='/admin/my-users'
            breadLinkText='Volver A Mis Usuarios'>
            <Card className='bg-gray-50'>
                <Card.Body>
                    <Card.Title className='mb-2'>Registrar Usuario</Card.Title>
                    <UserRegisterForm />
                </Card.Body>
            </Card>
        </AdminLayout>
    );
};