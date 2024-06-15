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
                                className='uppercase font-semibold'>
                                Inicio
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link
                                to='/marketplace/about-us'
                                className='uppercase font-semibold'>
                                Nosotros
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link
                                to='/marketplace/stores'
                                className='uppercase font-semibold'>
                                Tiendas
                            </Link>
                        </Menu.Item>
                    </Menu>
                </NavbarDaisy.Center>
                <NavbarDaisy.End className='flex gap-4'>
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