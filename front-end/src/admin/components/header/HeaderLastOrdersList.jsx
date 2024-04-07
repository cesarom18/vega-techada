import { Dropdown } from 'react-daisyui';

export const HeaderLastOrdersList = ({ lastOrders }) => {
    return (
        lastOrders.slice(0, 5).map((order) => (
            <Dropdown.Item
                key={order.id}
                className='flex flex-col border-b w-full'>
                <div className='w-full'>
                    <span className='text-gray-800'>Hace {order.timestamp} minutos</span>
                </div>
                <div className='flex flex-col gap-2 w-full text-start'>
                    <div className='grid grid-cols-2'>
                        <div className='flex flex-col col-span-1'>
                            <span className='text-gray-800 font-semibold'>Nombre</span>
                            <span>{order.firstName}</span>
                        </div>
                        <div className='flex flex-col col-span-1'>
                            <span className='text-gray-800 font-semibold'>Apellido</span>
                            <span>{order.lastName}</span>
                        </div>
                    </div>
                    <div className='grid grid-cols-2'>
                        <div className='flex flex-col col-span-1'>
                            <span className='text-gray-800 font-semibold'>N° Productos</span>
                            <span>{order.amountProducts}</span>
                        </div>
                        <div className='flex flex-col col-span-1'>
                            <span className='text-gray-800 font-semibold'>Total</span>
                            <span>${order.total}</span>
                        </div>
                    </div>
                </div>
            </Dropdown.Item>
        ))
    );
};