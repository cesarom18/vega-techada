import { useEffect, useState } from 'react';
import { Alert } from 'react-daisyui';
import { TbInfoCircle } from 'react-icons/tb';

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
                    {
                        (stores.length !== 0)
                            ? <StoresList stores={stores} />
                            : <Alert icon={<TbInfoCircle className='text-xl' />}>No hay tiendas registradas</Alert>
                    }
                </div>
            </section>
        </MarketplaceLayout>
    );
};