import { Link } from 'react-router-dom';
import { Menu } from 'react-daisyui';
import {
    TbShoppingCart,
    TbShoppingCartPlus,
    TbReceipt
} from 'react-icons/tb';

export const ShopSidebarMenu = () => {
    return (
        <Menu className='text-gray-700 p-0'>
            <Menu.Title className='text-xs text-gray-800 uppercase font-semibold tracking-[2px] my-3 px-0'>Productos</Menu.Title>
            <Menu.Item>
                <Link
                    to='/admin/my-products'
                    className='flex items-center gap-4 hover:bg-gray-700 hover:text-gray-50 transition-colors rounded-lg p-3'>
                    <TbShoppingCart className='text-xl' />
                    <span>Mis Productos</span>
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link
                    to='/admin/register-product'
                    className='flex items-center gap-4 hover:bg-gray-700 hover:text-gray-50 transition-colors rounded-lg p-3'>
                    <TbShoppingCartPlus className='text-xl' />
                    <span>Registrar Producto</span>
                </Link>
            </Menu.Item>
            <Menu.Title className='text-xs text-gray-800 uppercase font-semibold tracking-[2px] my-3 px-0'>Pedidos</Menu.Title>
            <Menu.Item>
                <Link
                    to='/admin/my-orders'
                    className='flex items-center gap-4  hover:bg-gray-700 hover:text-gray-50 transition-colors rounded-lg p-3'>
                    <TbReceipt className='text-xl' />
                    <span>Mis Pedidos</span>
                </Link>
            </Menu.Item>
        </Menu>
    );
};