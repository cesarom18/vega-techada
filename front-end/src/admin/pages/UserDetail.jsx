import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-daisyui';
import { TbUserEdit } from 'react-icons/tb';

import { AdminLayout } from '../layout/AdminLayout';
import { UserDetailForm } from '../components/form';
import { users } from '../data'

export const UserDetail = () => {
    const [user, setUser] = useState(null);

    const { userId } = useParams();

    useEffect(() => {
        setUser((prevState) => users.find((u) => u.id == userId));
    }, []);

    return (
        <AdminLayout
            breadPageIcon={<TbUserEdit />}
            breadPageText='Detalles Del Usuario'
            breadLinkPath='/admin/my-users'
            breadLinkText='Volver A Mis Usuarios'>
            <Card className='bg-gray-50'>
                <Card.Body>
                    <Card.Title className='mb-2'>Detalles Del Usuario</Card.Title>
                    <UserDetailForm />
                </Card.Body>
            </Card>
        </AdminLayout>
    );
};