import { Link } from 'react-router-dom';
import { Menu } from 'react-daisyui';


export const NavbarMenu = () => {
    return (
        <Menu
            horizontal
            className='hidden lg:flex px-2'>
            <Menu.Item>
                <Link
                    to='/marketplace'
                    className='underline-animation hover:bg-transparent'>
                    Inicio
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link
                    to='/marketplace/stores'
                    className='underline-animation hover:bg-transparent'>
                    Tiendas
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link
                    to='/marketplace/about-us'
                    className='underline-animation hover:bg-transparent'>
                    Nosotros
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link
                    to='/marketplace/contact'
                    className='underline-animation hover:bg-transparent'>
                    Contacto
                </Link>
            </Menu.Item>
        </Menu>
    );
};