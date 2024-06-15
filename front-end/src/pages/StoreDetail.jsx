import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Join, Accordion, Tabs } from 'react-daisyui';

import { MarketplaceLayout } from '../layout/MarketplaceLayout';
import { stores } from '../data';

export const StoreDetail = () => {
    const [store, setStore] = useState({});

    const { storeId } = useParams();

    useEffect(() => {
        setStore((prevState) => stores.find((s) => s.id == storeId));
    }, []);

    return (
        <MarketplaceLayout
            showBanner
            bannerTitle='Detalle Tienda'
            bannerImg={store.image}
            footerTheme='dark'>
            <section className='py-20'>
                <div className='container mx-auto px-8'>
                    <div className='grid grid-cols-12 gap-x-4 gap-y-4 mb-4'>
                        <div className='col-span-12 lg:col-span-3 flex flex-col gap-y-6'>
                            <div>
                                <img
                                    src={store.image}
                                    className='image-full rounded-lg'
                                    width={600}
                                    height={600} />
                            </div>
                            <Join
                                className='w-full border'
                                vertical={true}>
                                <Accordion className='rounded-none border-b'>
                                    <Accordion.Title className='text-xl uppercase font-semibold'>
                                        Informacion Adicional
                                    </Accordion.Title>
                                    <Accordion.Content>
                                        <div className='mb-2'>
                                            <span className='font-semibold'>Correo Electronico</span>
                                            <p className='text-sm'>{store.email}</p>
                                        </div>
                                        <div className='mb-2'>
                                            <span className='font-semibold'>Numero Telefonico</span>
                                            <p className='text-sm'>{store.phone}</p>
                                        </div>
                                        <div className='mb-2'>
                                            <span className='font-semibold'>Horario De Atencion</span>
                                            <p className='text-sm'>Lunes a Viernes de {store.openingTime} hasta las {store.closingTime}</p>
                                        </div>
                                    </Accordion.Content>
                                </Accordion>
                                <Accordion className='rounded-none border-b'>
                                    <Accordion.Title className='text-xl uppercase font-semibold'>
                                        Rubros
                                    </Accordion.Title>
                                    <Accordion.Content>
                                        <ul className='list-disc pl-4'>
                                            {
                                                store.productCategories?.map((v, i) => (
                                                    <li key={i}>{v}</li>
                                                ))
                                            }
                                        </ul>
                                    </Accordion.Content>
                                </Accordion>
                                <Accordion className='rounded-none border-b'>
                                    <Accordion.Title className='text-xl uppercase font-semibold'>
                                        Ubicacion
                                    </Accordion.Title>
                                    <Accordion.Content>
                                        <p className='text-sm'>{store.location}</p>
                                    </Accordion.Content>
                                </Accordion>
                            </Join>
                        </div>
                        <div className='col-span-12 lg:col-span-9'>
                            <div className='flex flex-col gap-y-1 mb-4'>
                                <h3 className='text-3xl uppercase'>{store.name}</h3>
                                <div className='flex flex-col gap-y-1'>
                                    <span className='text-gray-600'>{store.owner}</span>
                                    <span className='text-gray-500'>{store.creationDate?.slice(0, 10)}</span>
                                </div>
                            </div>
                            <Tabs variant='lifted'>
                                <Tabs.RadioTab
                                    name='my_tabs'
                                    label='Historia'
                                    contentClassName='bg-base-100 border-base-300 rounded-box p-6'
                                    defaultChecked>
                                    Officia duis mollit esse in nisi nulla commodo magna. Nisi eiusmod pariatur voluptate fugiat tempor dolor sunt ea consectetur commodo ipsum.
                                    Dolor deserunt consectetur enim eu sit in officia sit laborum elit. Reprehenderit veniam cillum magna consectetur dolor eiusmod incididunt eu sunt incididunt.
                                    Laborum occaecat amet cillum est sit consequat eu deserunt. Pariatur ullamco labore adipisicing laborum sint duis eu veniam nisi Lorem eu.
                                    Velit tempor voluptate ullamco amet veniam cillum et cillum amet aliqua id sunt.
                                    Laborum occaecat amet cillum est sit consequat eu deserunt. Pariatur ullamco labore adipisicing laborum sint duis eu veniam nisi Lorem eu.
                                    Velit tempor voluptate ullamco amet veniam cillum et cillum amet aliqua id sunt.
                                    Laborum occaecat amet cillum est sit consequat eu deserunt. Pariatur ullamco labore adipisicing laborum sint duis eu veniam nisi Lorem eu.
                                    Velit tempor voluptate ullamco amet veniam cillum et cillum amet aliqua id sunt.
                                </Tabs.RadioTab>
                                <Tabs.RadioTab
                                    name='my_tabs'
                                    label='Descripcion'
                                    contentClassName='bg-base-100 border-base-300 rounded-box p-6'>
                                    {store.description}
                                </Tabs.RadioTab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </section>
        </MarketplaceLayout>
    );
};