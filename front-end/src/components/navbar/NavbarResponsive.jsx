import { Link } from 'react-router-dom';
import { Button, Divider, Menu } from 'react-daisyui';
import { TbX } from 'react-icons/tb';

export const NavbarResponsive = ({ toggleNavbarVisible }) => {
    return (
        <Menu
            vertical
            className='bg-gray-50 min-h-screen'>
            <div className='flex justify-between items-center pl-2'>
                <span className='text-xl font-semibold'>VegaTechada</span>
                <Button
                    color='ghost'
                    size='md'
                    startIcon={<TbX />}
                    className='lg:hidden text-2xl text-gray-800'
                    onClick={toggleNavbarVisible} />
            </div>
            <Divider className='my-2' />
            <Menu.Item>
                <Link
                    to='/marketplace'
                    className='hover:bg-gray-700 hover:text-gray-50 uppercase font-semibold justify-center py-4'>
                    Inicio
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link
                    to='/marketplace/about-us'
                    className='hover:bg-gray-700 hover:text-gray-50 uppercase font-semibold justify-center py-4'>
                    Nosotros
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link
                    to='/marketplace/stores'
                    className='hover:bg-gray-700 hover:text-gray-50 uppercase font-semibold justify-center py-4'>
                    Tiendas
                </Link>
            </Menu.Item>
        </Menu>
    );
};