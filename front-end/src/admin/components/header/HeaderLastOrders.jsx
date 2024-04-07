import { Link } from 'react-router-dom';
import { Divider, Dropdown, Button, Alert } from 'react-daisyui';
import { TbBell, TbInfoCircle, TbBellRinging } from 'react-icons/tb';

import { HeaderLastOrdersList } from './';
import { lastOrders } from '../../data';

export const HeaderLastOrders = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle
        button={false}>
        <Button
          color='ghost'
          size='md'
          shape='square'
          startIcon={(lastOrders.length !== 0) ? <TbBellRinging /> : <TbBell />}
          className='text-xl' />
      </Dropdown.Toggle>
      <Dropdown.Menu className='z-10 mt-10 w-80 max-h-[500px] '>
        <div className='flex flex-col text-gray-700 overflow-y-scroll p-4'>
          <div className='text-sm text-center text-gray-800 font-bold'>Ultimos Pedidos ({lastOrders.length})</div>
          <Divider className='my-2' />
          {
            (lastOrders.length !== 0)
              ? <HeaderLastOrdersList lastOrders={lastOrders} />
              : <Alert icon={<TbInfoCircle className='text-xl' />}>No hay pedidos nuevos registrados</Alert>
          }
          {
            (lastOrders.length > 5) &&
            <Link to='/admin/my-orders'>
              <Button
                color='neutral'
                size='md'
                fullWidth
                className='mt-4'>
                Ver Mis Pedidos
              </Button>
            </Link>
          }
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};
