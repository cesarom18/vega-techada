import { useCallback, useState } from 'react';
import { Button, Dropdown, Menu, Navbar as NavbarDaisy, Divider } from 'react-daisyui';
import { Link } from 'react-router-dom';
import { TbMenu2, TbX } from 'react-icons/tb';

import { marketplacePaths } from '../../../router/routes/paths';

export const Navbar = () => {
    const [navbarMenu, setNavbarMenu] = useState(false);

    const toggleNavbarMenu = useCallback(() => {
        setNavbarMenu((prevState) => !prevState);
    }, []);

    console.log(navbarMenu)

    return (
        <>
            <NavbarDaisy className='bg-gray-50 shadow-md px-4'>
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
                                        className='underline-animation hover:bg-transparent'>
                                        {name}
                                    </Link>
                                </Menu.Item>
                            ))
                        }
                    </Menu>
                </NavbarDaisy.Center>
                <NavbarDaisy.End>
                    <Dropdown
                        end
                        className='hidden lg:flex'>
                        <Button
                            color='ghost'
                            className='avatar'
                            shape='square'>
                            <div className='rounded-lg w-10'>
                                <img src='/img/shop-admin-test.jpg' />
                            </div>
                        </Button>
                        <Dropdown.Menu className='menu-sm w-52 mt-3'>
                            <Dropdown.Item className='hover:bg-gray-800 hover:text-gray-50'>Mi Cuenta</Dropdown.Item>
                            <Dropdown.Item className='hover:bg-gray-800 hover:text-gray-50'>Mi Cuenta</Dropdown.Item>
                            <Dropdown.Item className='hover:bg-gray-800 hover:text-gray-50'>Cerrar Sesion</Dropdown.Item>
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
            <div className={`fixed z-20 top-0 ${(navbarMenu) ? '-left-0' : '-left-full'} lg:hidden self-start overflow-y-scroll transition-all w-full`}>
                <Menu
                    vertical
                    className='bg-gray-50 min-h-screen'>
                    <div className='flex justify-end'>
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
                                    className='hover:bg-gray-800 hover:text-gray-50 justify-center'>
                                    {name}
                                </Link>
                            </Menu.Item>
                        ))
                    }
                </Menu>
            </div>
        </>
    );
};