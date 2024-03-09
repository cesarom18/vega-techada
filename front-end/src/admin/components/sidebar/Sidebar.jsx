import { Link } from 'react-router-dom';
import { Menu, Divider, Button } from 'react-daisyui';
import { TbLayoutDashboard, TbShoppingCart, TbShoppingCartPlus, TbReceipt, TbSettings, TbHelpCircle, TbX } from 'react-icons/tb';

export const Sidebar = ({ toggleSidebarVisible }) => {
    return (
        <nav className='bg-gray-50 flex flex-col justify-between gap-8 border-r-2 min-h-screen max-h-screen p-4'>
            <div>
                <div className='logo flex justify-between mb-4'>
                    <div className='flex items-center gap-6'>
                        <span className='bg-gray-600 text-gray-50 text-center rounded-xl w-10 h-10 p-2'>V</span>
                        <div>
                            <h3 className='text-gray-600 font-bold'>Vega Techada</h3>
                            <p className='text-gray-800 text-xs'>Panel de administracion</p>
                        </div>
                    </div>
                    <Button
                        color='ghost'
                        className='flex lg:hidden hover:bg-gray-800 hover:text-gray-50 text-2xl btn-circle '
                        onClick={toggleSidebarVisible}>
                        <TbX />
                    </Button>
                </div>
                <Divider />
                <Menu className='text-gray-800 p-0'>
                    <Menu.Title className='text-xs text-gray-600 uppercase font-semibold tracking-[2px] mb-3 px-0'>Analisis</Menu.Title>
                    <Menu.Item>
                        <Link
                            to='/admin/dashboard'
                            className='flex items-center gap-4 hover:bg-gray-800 hover:text-gray-50 transition-colors rounded-lg p-3'>
                            <TbLayoutDashboard className='text-xl' />
                            <span>Dashboard</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Title className='text-xs text-gray-600 uppercase font-semibold tracking-[2px] my-3 px-0'>Productos</Menu.Title>
                    <Menu.Item>
                        <Link
                            to='/admin/my-products'
                            className='flex items-center gap-4 hover:bg-gray-800 hover:text-gray-50 transition-colors rounded-lg p-3'>
                            <TbShoppingCart className='text-xl' />
                            <span>Mis Productos</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link
                            to='/admin/register-product'
                            className='flex items-center gap-4 hover:bg-gray-800 hover:text-gray-50 transition-colors rounded-lg p-3'>
                            <TbShoppingCartPlus className='text-xl' />
                            <span>Registrar Producto</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Title className='text-xs text-gray-600 uppercase font-semibold tracking-[2px] my-3 px-0'>Pedidos</Menu.Title>
                    <Menu.Item>
                        <Link
                            to='/admin/my-orders'
                            className='flex items-center gap-4  hover:bg-gray-800 hover:text-gray-50 transition-colors rounded-lg p-3'>
                            <TbReceipt className='text-xl' />
                            <span>Mis Pedidos</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </div>
            <div>
                <Menu className='text-gray-800 mt-4 p-0'>
                    <Menu.Item>
                        <a
                            href='#'
                            className='flex items-center gap-4 hover:bg-gray-800 hover:text-gray-50 transition-colors rounded-lg p-3'>
                            <TbSettings className='w-5 h-5'/>
                            Ajustes
                        </a>
                    </Menu.Item>
                    <Menu.Item>
                        <a
                            href='#'
                            className='flex items-center gap-4 hover:bg-gray-800 hover:text-gray-50 transition-colors rounded-lg p-3'>
                            <TbHelpCircle className='w-5 h-5' />
                            Ayuda
                        </a>
                    </Menu.Item>
                </Menu>
            </div>
        </nav>
    );
};