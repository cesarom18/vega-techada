import { Dropdown, Divider } from 'react-daisyui';

import { HeaderLastOrders } from './';
import { TbLogout2 } from 'react-icons/tb';

export const Header = () => {
    return (
        <header className='bg-gray-50 flex justify-between items-center shadow-sm pr-12 pl-8 py-4'>
            <div>
                <HeaderLastOrders />
            </div>
            <div className='flex items-center gap-4'>
                <Dropdown
                    vertical='bottom'
                    end>
                    <Dropdown.Toggle
                        button={false}>
                        <img
                            src='/img/shop-admin-test.jpg'
                            className='object-cover rounded-xl cursor-pointer ring-4 ring-gray-200 hover:ring-gray-300 w-10 h-10' />
                    </Dropdown.Toggle>
                    <Dropdown.Menu className='mt-10 w-52'>
                        <div className='flex flex-col justify-center items-center gap-0'>
                            <span className='text-gray-800 font-semibold'>Local Ejemplo</span>
                            <span className='text-gray-600'>Dueño Local Ejemplo</span>
                        </div>
                        <Divider className='my-1' />
                        <Dropdown.Item className='hover:bg-gray-800 hover:text-gray-50 ' >
                            <TbLogout2 /> Cerrar Sesion
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </header>
    );
};