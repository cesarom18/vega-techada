import { Menu, Divider, Button } from 'react-daisyui';
import { TbX, TbSettings, TbHelpCircle } from 'react-icons/tb';

import { OwnerSidebarMenu } from './OwnerSidebarMenu';
import { StoreSidebarMenu } from './StoreSidebarMenu';

const userType = 0;

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
                        shape='circle'
                        className='lg:hidden hover:bg-gray-800 text-gray-700 hover:text-gray-50 text-2xl '
                        onClick={toggleSidebarVisible}>
                        <TbX />
                    </Button>
                </div>
                <Divider />
                {
                    (userType === 0)
                        ? <OwnerSidebarMenu />
                        : <StoreSidebarMenu />
                }
            </div>
            <div>
                <Menu className='text-gray-800 mt-4 p-0'>
                    <Menu.Item>
                        <a
                            href='#'
                            className='flex items-center gap-4 hover:bg-gray-800 hover:text-gray-50 transition-colors rounded-lg p-3'>
                            <TbSettings className='w-5 h-5' />
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