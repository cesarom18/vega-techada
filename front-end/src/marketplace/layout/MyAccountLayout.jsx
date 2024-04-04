import { Link } from 'react-router-dom'
import { Card, Menu } from 'react-daisyui';
import { TbId, TbShoppingBag } from 'react-icons/tb';

export const MyAccountLayout = ({ children }) => {
    return (
        <section className='py-20'>
            <div className='container mx-auto px-8'>
                <div className='grid grid-cols-12 gap-6'>
                    <div className='col-span-12 lg:col-span-4'>
                        <Card className='bg-gray-100 rounded-lg p-4'>
                            <Card.Body className='p-0'>
                                <Menu className='p-0'>
                                    <Menu.Title>Navegacion</Menu.Title>
                                    <Menu.Item>
                                        <Link to='/marketplace/my-information'>
                                            <TbId className='w-5 h-5' />
                                            Mi Informacion
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link to='/marketplace/my-orders'>
                                            <TbShoppingBag className='w-5 h-5' />
                                            Mis Pedidos
                                        </Link>
                                    </Menu.Item>
                                </Menu>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-span-12 lg:col-span-8'>
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
};