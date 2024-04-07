import { Dropdown, Divider, Button, Avatar } from 'react-daisyui';

import { HeaderLastOrders } from './';
import { TbLogout2, TbMenu2 } from 'react-icons/tb';

export const Header = ({ toggleSidebarVisible }) => {
    return (
        <header className='bg-gray-50 flex justify-between items-center shadow-sm pr-12 pl-8 py-4'>
            <HeaderLastOrders />
            <div className='flex items-center gap-4'>
                <Dropdown
                    vertical='bottom'
                    end>
                    <Dropdown.Toggle
                        button={false}>
                        <Button
                            color='ghost'
                            className='avatar'
                            shape='square'>
                            <div className='rounded-lg w-10'>
                                <img src='/img/img-test.jpg' />
                            </div>
                        </Button>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className='z-10 text-sm mt-10 w-52 p-4'>
                        <div className='flex flex-col justify-center items-center gap-0'>
                            <span className='text-gray-800 font-semibold'>Local Ejemplo</span>
                            <span className='text-gray-700'>Dueño Local Ejemplo</span>
                        </div>
                        <Divider className='my-1' />
                        <Dropdown.Item className='hover:bg-gray-700 hover:text-gray-50' >
                            <TbLogout2 /> Cerrar Sesion
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Button
                    color='ghost'
                    size='md'
                    shape='square'
                    startIcon={<TbMenu2 />}
                    className='lg:hidden text-2xl text-gray-800'
                    onClick={toggleSidebarVisible} />
            </div>
        </header>
    );
};