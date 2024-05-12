import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Alert } from 'react-daisyui';
import { TbInfoCircle } from 'react-icons/tb';

import { MarketplaceLayout } from '../layout/MarketplaceLayout';
import { FilterList } from '../components/filter';
import { StoreDetailProductList } from '../components/StoreDetailProductList';
import { stores, products as productsTest } from '../data';

const storesFilters = [
    {
        name: 'Categorias',
        options: [
            'Frutas y Verduras',
            'Carnes',
            'Pescados y Mariscos',
            'Abarrotes',
            'Bebestibles',
            'Ropa',
            'Artesanias',
            'Recuerdos',
            'Almuerzos'
        ]
    }
];

export const StoreDetail = () => {
    const [store, setStore] = useState({});
    const [initialProducts] = useState(productsTest);
    const [products, setProducts] = useState([]);

    const { storeId } = useParams();

    useEffect(() => {
        setStore((prevState) => stores.find((s) => s.id == storeId));
        setProducts(initialProducts);
    }, []);

    return (
        <MarketplaceLayout
            showBanner
            bannerTitle={store.name}
            bannerImg={store.image}
            footerTheme='dark'>
            <section className='py-20'>
                <div className='container mx-auto px-8'>
                    <div className='grid grid-cols-5'>
                        <div className='col-span-12 lg:col-span-1 mb-8 lg:mb-0 lg:pr-8'>
                            <FilterList 
                                filters={storesFilters}
                                initialElements={initialProducts}
                                elements={products}
                                setElements={setProducts}/>
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