import { Link } from 'react-router-dom';
import { Menu, Divider, Button } from 'react-daisyui';
import { TbX, TbHelpCircle } from 'react-icons/tb';

import { AdminSidebarMenu } from './AdminSidebarMenu';
import { ShopSidebarMenu } from './ShopSidebarMenu';

const userType = 1;

export const Sidebar = ({ toggleSidebarVisible }) => {
    return (
        <nav className='bg-gray-50 flex flex-col justify-between gap-8 border-r-2 min-h-screen max-h-screen p-4'>
            <div>
                <div className='logo flex justify-between mb-4'>
                    <div className='flex items-center justify-center'>
                        <span className='bg-gray-700 text-gray-50 text-center rounded-xl w-10 h-10 p-2'>V</span>
                    </div>
                    <Button
                        color='ghost'
                        shape='square'
                        startIcon={<TbX />}
                        className='lg:hidden text-2xl'
                        onClick={toggleSidebarVisible} />
                </div>
                <Divider className='my-1'/>
                {
                    (userType === 0)
                        ? <AdminSidebarMenu />
                        : <ShopSidebarMenu />
                }
            </div>
            <Menu className='text-gray-700 p-0'>
                <Menu.Item>
                    <Link
                        to=''
                        className='flex items-center gap-4 hover:bg-gray-700 hover:text-gray-50 transition-colors rounded-lg p-3'>
                        <TbHelpCircle className='w-5 h-5' />
                        Ayuda
                    </Link>
                </Menu.Item>
            </Menu>
        </nav>
    );
};