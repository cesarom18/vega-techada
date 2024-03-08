import { Divider, Dropdown, Button, Alert } from 'react-daisyui';
import { TbBell, TbInfoCircle, TbBellRinging } from 'react-icons/tb';

import { HeaderLastOrdersList } from './';
import { lastOrders } from '../../data';

export const HeaderLastOrders = () => {
    return (
        <Dropdown>
            <Dropdown.Toggle
                button={false}
                className='btn btn-circle btn-ghost hover:bg-gray-800 hover:text-gray-50 text-2xl'>
                {
                    (lastOrders.length !== 0)
                        ? < TbBellRinging />
                        : <TbBell />
                }
            </Dropdown.Toggle>
            <Dropdown.Menu className='z-10 mt-10 w-80 max-h-[500px] '>
                <div className='flex flex-col overflow-y-scroll p-2'>
                    <div className='text-sm text-center font-semibold p-1'>Ultimos Pedidos ({lastOrders.length})</div>
                    <Divider className='my-1' />
                    {
                        (lastOrders.length !== 0)
                            ? <HeaderLastOrdersList lastOrders={lastOrders} />
                            : <Alert icon={<TbInfoCircle className='text-xl' />}>No hay pedidos nuevos registrados</Alert>
                    }
                    {(lastOrders.length > 5) && <Button size='md' className='bg-gray-800 hover:bg-gray-700 text-gray-50 mt-4'>Ver Mas</Button>}
                </div>
            </Dropdown.Menu>
        </Dropdown>
    );
};