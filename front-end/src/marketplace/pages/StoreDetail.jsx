import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Divider } from 'react-daisyui';
import { TbFilter } from 'react-icons/tb';

import { MarketplaceLayout } from '../layout/MarketplaceLayout';
import { FilterItem } from '../components/FilterItem';
import { StoreDetailProductList } from '../components/StoreDetailProductList';
import { stores, products } from '../../data';

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
                                <FilterItem
                                    title='Categorias'
                                    elements={store.productCategories} />
                            </div>
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