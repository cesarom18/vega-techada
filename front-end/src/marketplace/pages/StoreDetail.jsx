import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { MarketplaceLayout } from '../layout/MarketplaceLayout';
import { FilterList } from '../components/filter';
import { StoreDetailProductList } from '../components/StoreDetailProductList';
import { stores, products } from '../../data';

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

export const StoreDetail = () => {
    const [store, setStore] = useState({});

    const { storeId } = useParams();

    useEffect(() => {
        setStore((prevState) => stores.find((s) => s.id == storeId));
    }, []);

    return (
        <MarketplaceLayout
            showBanner
            bannerTitle={store.name}
            bannerImg={store.image}>
            <section className='py-20'>
                <div className='container mx-auto px-8'>
                    <div className='grid grid-cols-5'>
                        <div className='col-span-12 lg:col-span-1 mb-8 lg:mb-0 lg:pr-8'>
                            <FilterList filters={storesFilters}/>
                        </div>
                        <div className='col-span-12 lg:col-span-4'>
                            {
                                (products.length !== 0)
                                    ? <StoreDetailProductList products={products}/>
                                    : <Alert icon={<TbInfoCircle className='text-xl' />}>No hay productos por el momento</Alert>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </MarketplaceLayout>
    );
};