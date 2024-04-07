import { Link } from 'react-router-dom';
import { Menu } from 'react-daisyui';
import {
    TbUser,
    TbUserPlus,
    TbBuildingStore,
    TbFilePlus
} from 'react-icons/tb';

export const AdminSidebarMenu = () => {
    return (
        <Menu className='text-gray-700 p-0'>
            <Menu.Title className='text-xs text-gray-800 uppercase font-semibold tracking-[2px] my-3 px-0'>Usuarios</Menu.Title>
            <Menu.Item>
                <Link
                    to='my-users/'
                    className='flex items-center gap-4 hover:bg-gray-700 hover:text-gray-50 transition-colors rounded-lg p-3'>
                    <TbUser className='text-xl' />
                    <span>Mis Usuarios</span>
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link
                    to='/admin/register-user'
                    className='flex items-center gap-4 hover:bg-gray-700 hover:text-gray-50 transition-colors rounded-lg p-3'>
                    <TbUserPlus className='text-xl' />
                    <span>Registrar Usuario</span>
                </Link>
            </Menu.Item>
            <Menu.Title className='text-xs text-gray-800 uppercase font-semibold tracking-[2px] my-3 px-0'>Tiendas</Menu.Title>
            <Menu.Item>
                <Link
                    to='/admin/my-stores'
                    className='flex items-center gap-4 hover:bg-gray-700 hover:text-gray-50 transition-colors rounded-lg p-3'>
                    <TbBuildingStore className='text-xl' />
                    <span>Mis Tiendas</span>
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link
                    to='/admin/register-store'
                    className='flex items-center gap-4 hover:bg-gray-700 hover:text-gray-50 transition-colors rounded-lg p-3'>
                    <TbFilePlus className='text-xl' />
                    <span>Registrar Tienda</span>
                </Link>
            </Menu.Item>
        </Menu>
    );
};