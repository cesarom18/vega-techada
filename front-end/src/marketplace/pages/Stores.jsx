import { useEffect, useState } from 'react';
import { Alert } from 'react-daisyui';
import { TbInfoCircle, TbFilter } from 'react-icons/tb';

import { MarketplaceLayout } from '../layout/MarketplaceLayout';
import { FilterList } from '../components/filter';
import { StoresList } from '../components/StoresList';
import { stores as storesTest } from '../../data';

const storesFilters = [
    {
        name: 'Ejemplo1',
        options: [
            'Opcion1',
            'Opcion2',
            'Opcion3'
        ]
    },
    {
        name: 'Ejemplo2',
        options: [
            'Opcion1',
            'Opcion2',
            'Opcion3'
        ]
    },
];

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
                            <FilterList filters={storesFilters} />
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