import { useEffect, useState } from 'react';
import { Alert, Divider, Collapse, Checkbox, Button } from 'react-daisyui';
import { TbInfoCircle, TbFilter } from 'react-icons/tb';

import { MarketplaceLayout } from '../layout/MarketplaceLayout';
import { StoresList } from '../components/StoresList';
import { stores as storesTest } from '../../data';

export const Stores = () => {
    const [stores, setStores] = useState([]);

    useEffect(() => {
        setStores(storesTest);
    }, []);

    return (
        <MarketplaceLayout
            showBanner
            bannerTitle='Tiendas'>
            <section className='py-20'>
                <div className='container mx-auto px-8'>
                    <div className='grid grid-cols-5'>
                        <div className='col-span-12 lg:col-span-1 mb-8 lg:mb-0 lg:pr-8'>
                            <div className='flex justify-between items-center'>
                                <span className='text-lg uppercase font-semibold'>Filtros</span>
                                <span className='underline cursor-pointer'>Borrar Filtros</span>
                            </div>
                            <Divider className='my-2' />
                            <Button
                                size='md'
                                color='neutral'
                                fullWidth
                                endIcon={<TbFilter />}
                                className='my-2'>
                                Filtrar
                            </Button>
                            <div>
                                <Collapse
                                    icon='arrow'
                                    className='border-b-2 rounded-none'>
                                    <Collapse.Title className='pl-0'>Rubros</Collapse.Title>
                                    <Collapse.Content>
                                        <ul className='flex flex-col gap-4'>
                                            <li className='flex items-center'>
                                                <Checkbox className='mr-2' /> Carnes
                                            </li>
                                            <li className='flex items-center'>
                                                <Checkbox className='mr-2' /> Huevos
                                            </li>
                                            <li className='flex items-center'>
                                                <Checkbox className='mr-2' /> Frutas y Verduras
                                            </li>
                                            <li className='flex items-center'>
                                                <Checkbox className='mr-2' /> Comidas Preparadas
                                            </li>
                                            <li className='flex items-center'>
                                                <Checkbox className='mr-2' /> Productos Secos
                                            </li>
                                        </ul>
                                    </Collapse.Content>
                                </Collapse>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-4'>
                            {
                                (stores.length !== 0)
                                    ? <StoresList stores={stores} />
                                    : <Alert icon={<TbInfoCircle className='text-xl' />}>No hay tiendas registradas</Alert>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </MarketplaceLayout>
    );
};