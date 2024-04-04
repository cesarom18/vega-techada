import { Alert } from 'react-daisyui';
import { TbInfoCircle } from 'react-icons/tb';

import { MarketplaceLayout } from '../layout/MarketplaceLayout';
import { MyAccountLayout } from '../layout/MyAccountLayout';
import { OrderList } from '../components/OrderList';
import { orders } from '../../data';

export const MyOrders = () => {
    return (
        <MarketplaceLayout
            showBanner
            bannerTitle='Mi Cuenta'>
            <MyAccountLayout>
                <div className='mb-4'>
                    <span className='text-2xl font-bold '>Mis Pedidos</span>
                    <p className='text-sm text-justify mt-2'>
                        Aqui encontraras todos los pedidos que has realizado en nuestro sitio web,
                        ademas podras ver el estado de cada uno de ellos y los productos que esten asociados a ese pedido.
                        Recuerda que en caso de que tengas dudas siempre puedes consultar con nuestro equipo de soporte y
                        nuestros terminos y condiciones.
                    </p>
                </div>
                {
                    (orders.length !== 0)
                        ? <OrderList orders={orders} />
                        : <Alert icon={<TbInfoCircle className='text-xl' />}>No hay tiendas pedidos registrados a este usuario</Alert>
                }
            </MyAccountLayout>
        </MarketplaceLayout>
    );
};