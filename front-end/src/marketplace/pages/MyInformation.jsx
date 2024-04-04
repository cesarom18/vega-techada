import { Card } from 'react-daisyui';
import { TbUser, TbPhone, TbMail, TbCalendar } from 'react-icons/tb';

import { MarketplaceLayout } from '../layout/MarketplaceLayout';
import { MyAccountLayout } from '../layout/MyAccountLayout';

export const MyInformation = () => {
    return (
        <MarketplaceLayout
            showBanner
            bannerTitle='Mi Cuenta'>
            <MyAccountLayout>
                <div className='mb-4'>
                    <span className='text-2xl font-bold '>Informacion Personal</span>
                    <p className='text-sm text-justify mt-2'>
                        Gestiona tu informacion personal, incluyendo tu nombre, correo electronico y numero telefonico.
                        Recuerda que toda esta informacion es privada y no sera compartida con terceros, solamente sera utilizada
                        para los pedidos que relices dentro de nuestro sitio web en caso de querer contactar contigo por algun inconveniente.
                        Ante cualquier duda puedes revisar nuestras politicas de privacidad, terminos y condiciones o contactar con nuestro equipo de soporte.
                    </p>
                </div>
                <div className='grid grid-cols-12 gap-6'>
                    <Card className='col-span-6 bg-gray-100 rounded-lg p-4'>
                        <Card.Body className='p-0'>
                            <Card.Title className='flex justify-between items-center'>
                                <span className='text-lg font-semibold'>Nombre Completo</span>
                                <TbUser className='w-6 h-6' />
                            </Card.Title>
                            <span className='text-sm'>Ejemplo de nombre</span>
                        </Card.Body>
                    </Card>
                    <Card className='col-span-6 bg-gray-100 rounded-lg p-4'>
                        <Card.Body className='p-0'>
                            <Card.Title className='flex justify-between items-center'>
                                <span className='text-lg font-semibold'>Numero Telefonico</span>
                                <TbPhone className='w-6 h-6' />
                            </Card.Title>
                            <span className='text-sm'>+56912345678</span>
                        </Card.Body>
                    </Card>
                    <Card className='col-span-6 bg-gray-100 rounded-lg p-4'>
                        <Card.Body className='p-0'>
                            <Card.Title className='flex justify-between items-center'>
                                <span className='text-lg font-semibold'>Correo Electronico</span>
                                <TbMail className='w-6 h-6' />
                            </Card.Title>
                            <span className='text-sm'>correo@gmail.com</span>
                        </Card.Body>
                    </Card>
                    <Card className='col-span-6 bg-gray-100 rounded-lg p-4'>
                        <Card.Body className='p-0'>
                            <Card.Title className='flex justify-between items-center'>
                                <span className='text-lg font-semibold'>Fecha De Nacimiento</span>
                                <TbCalendar className='w-6 h-6' />
                            </Card.Title>
                            <span className='text-sm'>1 de Enero de 2002</span>
                        </Card.Body>
                    </Card>
                </div>
            </MyAccountLayout>
        </MarketplaceLayout>
    );
};