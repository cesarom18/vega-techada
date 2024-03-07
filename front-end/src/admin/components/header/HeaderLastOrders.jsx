import { Divider, Dropdown, Button } from 'react-daisyui';
import { TbBell } from 'react-icons/tb';

import { lastOrders } from '../../data';
import { HeaderLastOrdersList } from './';
import { CustomIndicator } from '../custom';

const dataLength = lastOrders.length;

export const HeaderLastOrders = () => {
    return (
        <Dropdown>
            <Dropdown.Toggle
                button={false}
                className='btn btn-circle btn-ghost hover:bg-gray-800 hover:text-gray-50 text-2xl'>
                {(dataLength !== 0) && <CustomIndicator number={dataLength} element={<TbBell />} />}
            </Dropdown.Toggle>
            <Dropdown.Menu className='z-20 mt-10 w-72 max-h-[500px] '>
                <div className='flex flex-col overflow-y-scroll'>
                    <div className='text-sm text-center font-semibold p-1'>Ultimos Pedidos</div>
                    <Divider className='my-1' />
                    {(dataLength !== 0) ? <HeaderLastOrdersList lastOrders={lastOrders} /> : <span>No hay ordenes</span>}
                    {(dataLength > 5) && <Button size='md' className='bg-gray-800 hover:bg-gray-700 text-gray-50 mt-4'>Ver Mas</Button>}
                </div>
            </Dropdown.Menu>
        </Dropdown>
    );
};