import { Button, Dropdown, Menu, Navbar as NavbarDaisy, Divider } from 'react-daisyui';
import { Link } from 'react-router-dom';
import { TbMenu2, TbShoppingCart } from 'react-icons/tb';

export const Navbar = ({ toggleNavbarVisible }) => {
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
                        <Menu.Item>
                            <Link
                                to='/marketplace'
                                className='uppercase'>
                                Inicio
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link
                                to='/marketplace/stores'
                                className='uppercase'>
                                Tiendas
                            </Link>
                        </Menu.Item>
                    </Menu>
                </NavbarDaisy.Center>
                <NavbarDaisy.End className='flex gap-4'>
                    <Button
                        color='ghost'
                        shape='square'
                        startIcon={<TbShoppingCart />}
                        className='text-gray-800 text-2xl' />
                    <Dropdown
                        end
                        vertical='bottom'
                        className='hidden lg:flex'>
                        <Button
                            color='ghost'
                            className='avatar'
                            shape='square'>
                            <div className='rounded-lg w-10'>
                                <img src='/img/img-test.jpg' />
                            </div>
                        </Button>
                        <Dropdown.Menu className='menu-sm z-[1] w-52 mt-6 p-4'>
                            <div className='flex justify-center items-center'>
                                <span className='text-gray-800 font-semibold'>Nombre Apellido</span>
                            </div>
                            <Divider className='my-1' />
                            <Dropdown.Item className='hover:bg-gray-700 hover:text-gray-50 px-4 py-2'>
                                <Link to='/marketplace/my-informations'>
                                    Mi Cuenta
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item className='hover:bg-gray-700 hover:text-gray-50 px-4 py-2'>Cerrar Sesion</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Button
                        color='ghost'
                        size='md'
                        startIcon={<TbMenu2 />}
                        className='lg:hidden text-2xl text-gray-800'
                        onClick={toggleNavbarVisible} />
                </NavbarDaisy.End>
            </NavbarDaisy>
        </>
    );
};