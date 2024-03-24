import { useCallback, useState } from 'react';
import { Button, Dropdown, Menu, Navbar as NavbarDaisy, Divider, Indicator, Badge } from 'react-daisyui';
import { Link } from 'react-router-dom';
import { TbMenu2, TbX, TbShoppingCart } from 'react-icons/tb';

import { marketplacePaths } from '../../../router/routes/paths';

export const Navbar = () => {
    const [navbarMenu, setNavbarMenu] = useState(false);

    const toggleNavbarMenu = useCallback(() => {
        setNavbarMenu((prevState) => !prevState);
    }, []);

    return (
        <>
            <NavbarDaisy className='bg-gray-50 fixed z-[3] shadow-md px-8'>
                <NavbarDaisy.Start>
                    <Link
                        to='/marketplace'
                        className='text-xl font-semibold'>
                        VegaTechada
                    </Link>
                </NavbarDaisy.Start>
                <NavbarDaisy.Center>
                    <Menu
                        horizontal
                        className='hidden lg:flex px-2'>
                        {
                            marketplacePaths.map(({ name, fullPath }, i) => (
                                <Menu.Item key={i}>
                                    <Link
                                        to={fullPath}
                                        className='underline-animation hover:bg-transparent uppercase'>
                                        {name}
                                    </Link>
                                </Menu.Item>
                            ))
                        }
                    </Menu>
                </NavbarDaisy.Center>
                <NavbarDaisy.End className='flex gap-4'>
                    <Button
                        color='ghost'
                        shape='square'
                        className='bg-gray-50 text-gray-700'>
                        <Indicator>
                            <Badge size='sm' className={Indicator.Item.className()}>
                                8
                            </Badge>
                            <TbShoppingCart
                                className='w-5 h-5' />
                        </Indicator>
                    </Button>
                    <Dropdown
                        end
                        vertical='bottom'
                        className='hidden lg:flex'>
                        <Button
                            color='ghost'
                            className='avatar'
                            shape='square'>
                            <div className='rounded-lg w-10'>
                                <img src='/img/shop-admin-test.jpg' />
                            </div>
                        </Button>
                        <Dropdown.Menu className='menu-sm z-[1] w-52 mt-6 p-4'>
                            <div className='flex justify-center items-center'>
                                <span className='text-gray-800 font-semibold'>Nombre Apellido</span>
                            </div>
                            <Divider className='my-1' />
                            <Dropdown.Item className='hover:bg-gray-800 hover:text-gray-50 px-4 py-2'>Mi Cuenta</Dropdown.Item>
                            <Dropdown.Item className='hover:bg-gray-800 hover:text-gray-50 px-4 py-2'>Cerrar Sesion</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Button
                        color='ghost'
                        size='md'
                        className='lg:hidden bg-gray-50 hover:bg-gray-800  text-gray-700 hover:text-gray-50'
                        onClick={toggleNavbarMenu}>
                        <TbMenu2 className='text-lg' />
                    </Button>
                </NavbarDaisy.End>
            </NavbarDaisy>
            <div className={`fixed z-[3] top-0 ${(navbarMenu) ? '-left-0' : '-left-full'} lg:hidden self-start overflow-y-scroll transition-all w-full`}>
                <Menu
                    vertical
                    className='bg-gray-50 min-h-screen'>
                    <div className='flex justify-between items-center pl-2'>
                        <span className='text-xl font-semibold'>VegaTechada</span>
                        <Button
                            color='ghost'
                            size='md'
                            className='lg:hidden bg-gray-50 hover:bg-gray-800  text-gray-700 hover:text-gray-50'
                            onClick={toggleNavbarMenu}>
                            <TbX className='text-lg' />
                        </Button>
                    </div>
                    <Divider className='my-2' />
                    {
                        marketplacePaths.map(({ name, fullPath }, i) => (
                            <Menu.Item key={i}>
                                <Link
                                    to={fullPath}
                                    className='hover:bg-gray-800 hover:text-gray-50 justify-center py-4'>
                                    {name}
                                </Link>
                            </Menu.Item>
                        ))
                    }
                    <Menu.Item>
                        <Link
                            to=''
                            className='hover:bg-gray-800 hover:text-gray-50 justify-center py-4'>
                            Mi cuenta
                        </Link>
                    </Menu.Item>
                </Menu>
            </div>
        </>
    );
};