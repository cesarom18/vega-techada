import { Accordion, Join } from 'react-daisyui';
import { TbClock, TbMapPinFilled, TbPhoneFilled, TbMail } from 'react-icons/tb';

import { MarketplaceLayout } from '../layout/MarketplaceLayout';
import { LeafletMap } from '../components/LeafletMap';

export const AboutUs = () => {
    return (
        <MarketplaceLayout
            showBanner
            bannerTitle='Nosotros'
            footerTheme='dark'>
            <section className='pt-20'>
                <div className='container mx-auto px-8'>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-12 lg:col-span-6 flex justify-center items-start lg:px-8'>
                            <img
                                src='/img/img-test.jpg'
                                className='image-full rounded-lg w-full'
                                width={600}
                                height={600}
                                alt='' />
                        </div>
                        <div className='col-span-12 lg:col-span-6'>
                            <div className='md:mt-4 mb-4'>
                                <h2 className='text-xl text-gray-800 font-semibold uppercase mb-2'>¿Quienes somos?</h2>
                                <p className='text-lg text-justify text-gray-500 m-0'>
                                    Duis enim incididunt id et adipisicing pariatur elit. Cillum laborum duis nulla nisi quis.
                                    Consequat ipsum excepteur ullamco dolore nisi fugiat nulla et anim sit anim deserunt exercitation laboris.
                                    Duis enim incididunt id et adipisicing pariatur elit. Cillum laborum duis nulla nisi quis.
                                    Consequat ipsum excepteur ullamco dolore nisi fugiat nulla et anim sit anim deserunt exercitation laboris.
                                </p>
                            </div>
                            <div className='mb-4'>
                                <h2 className='text-xl text-gray-800 font-semibold uppercase mb-2'>¿Cual es la vision de la Vega Techada?</h2>
                                <p className='text-lg text-justify text-gray-500 m-0'>
                                    Duis enim incididunt id et adipisicing pariatur elit. Cillum laborum duis nulla nisi quis.
                                    Consequat ipsum excepteur ullamco dolore nisi fugiat nulla et anim sit anim deserunt exercitation laboris.
                                    Duis enim incididunt id et adipisicing pariatur elit. Cillum laborum duis nulla nisi quis.
                                    Consequat ipsum excepteur ullamco dolore nisi fugiat nulla et anim sit anim deserunt exercitation laboris.
                                </p>
                            </div>
                            <div className='mb-4'>
                                <h2 className='text-xl text-gray-800 font-semibold uppercase mb-2'>¿Cual es la mision de la Vega Techada?</h2>
                                <p className='text-lg text-justify text-gray-500 m-0'>
                                    Duis enim incididunt id et adipisicing pariatur elit. Cillum laborum duis nulla nisi quis.
                                    Consequat ipsum excepteur ullamco dolore nisi fugiat nulla et anim sit anim deserunt exercitation laboris.
                                    Duis enim incididunt id et adipisicing pariatur elit. Cillum laborum duis nulla nisi quis.
                                    Consequat ipsum excepteur ullamco dolore nisi fugiat nulla et anim sit anim deserunt exercitation laboris.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='pt-20'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12 lg:col-span-6'>
                        <div className='container mx-auto lg:px-24 py-8'>
                            <h3 className='text-2xl text-gray-600 font-semibold uppercase mb-4'>¿Que ofrecemos?</h3>
                            <div>
                                <Join
                                    className='border w-full'
                                    vertical={true}>
                                    <Accordion
                                        icon='plus'
                                        className='border-b rounded-none'>
                                        <Accordion.Title className='text-xl'>
                                            Servicio 1
                                        </Accordion.Title>
                                        <Accordion.Content>
                                            <p className='text-justify'>Non non sint reprehenderit adipisicing fugiat mollit labore duis excepteur. Mollit ipsum est proident labore aliquip reprehenderit ea nisi amet elit excepteur excepteur irure. Cillum ex incididunt velit sit id amet magna. Id consequat pariatur incididunt ad cillum in tempor id nulla. Do ea laboris sint proident dolor ipsum sit laboris minim. Consequat pariatur quis velit culpa quis cupidatat qui in voluptate sunt ad ex cupidatat.</p>
                                        </Accordion.Content>
                                    </Accordion>
                                    <Accordion
                                        icon='plus'
                                        className='border-b rounded-none'>
                                        <Accordion.Title className='text-xl'>
                                            Servicio 2
                                        </Accordion.Title>
                                        <Accordion.Content>
                                            <p className='text-justify'>Non non sint reprehenderit adipisicing fugiat mollit labore duis excepteur. Mollit ipsum est proident labore aliquip reprehenderit ea nisi amet elit excepteur excepteur irure. Cillum ex incididunt velit sit id amet magna. Id consequat pariatur incididunt ad cillum in tempor id nulla. Do ea laboris sint proident dolor ipsum sit laboris minim. Consequat pariatur quis velit culpa quis cupidatat qui in voluptate sunt ad ex cupidatat.</p>
                                        </Accordion.Content>
                                    </Accordion>
                                    <Accordion
                                        icon='plus'
                                        className='border-b rounded-none'>
                                        <Accordion.Title className='text-xl'>
                                            Servicio 3
                                        </Accordion.Title>
                                        <Accordion.Content>
                                            <p className='text-justify'>Non non sint reprehenderit adipisicing fugiat mollit labore duis excepteur. Mollit ipsum est proident labore aliquip reprehenderit ea nisi amet elit excepteur excepteur irure. Cillum ex incididunt velit sit id amet magna. Id consequat pariatur incididunt ad cillum in tempor id nulla. Do ea laboris sint proident dolor ipsum sit laboris minim. Consequat pariatur quis velit culpa quis cupidatat qui in voluptate sunt ad ex cupidatat.</p>
                                        </Accordion.Content>
                                    </Accordion>
                                </Join>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-6 bg-gray-100'>
                        <div className='container mx-auto lg:px-24 py-8'>
                            <h3 className='text-2xl text-gray-600 font-semibold uppercase mb-4'>¿Por que escogernos?</h3>
                            <div className='mb-3'>
                                <div className='flex items-center gap-2 text-gray-800 mb-2'>
                                    <TbClock />
                                    <span className='text-lg uppercase font-semibold'>Razon 1</span>
                                </div>
                                <p className='text-justify m-0'>Non voluptate elit amet elit commodo.Non voluptate elit amet elit commodo.Non voluptate elit amet elit commodo.</p>
                            </div>
                            <div className='mb-3'>
                                <div className='flex items-center gap-2 text-gray-800 mb-2'>
                                    <TbClock />
                                    <span className='text-lg uppercase font-semibold'>Razon 2</span>
                                </div>
                                <p className='text-justify m-0'>Non voluptate elit amet elit commodo.Non voluptate elit amet elit commodo.Non voluptate elit amet elit commodo.</p>
                            </div>
                            <div className='mb-3'>
                                <div className='flex items-center gap-2 text-gray-800 mb-2'>
                                    <TbClock />
                                    <span className='text-lg uppercase font-semibold'>Razon 3</span>
                                </div>
                                <p className='text-justify m-0'>Non voluptate elit amet elit commodo.Non voluptate elit amet elit commodo.Non voluptate elit amet elit commodo.</p>
                            </div>
                            <div className='mb-3'>
                                <div className='flex items-center gap-2 text-gray-800 mb-2'>
                                    <TbClock />
                                    <span className='text-lg uppercase font-semibold'>Razon 4</span>
                                </div>
                                <p className='text-justify m-0'>Non voluptate elit amet elit commodo.Non voluptate elit amet elit commodo.Non voluptate elit amet elit commodo.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-6 bg-gray-100'>
                        <div className='flex justify-center items-center pt-12 pb-2 lg:py-12'>
                            <div className='font-semibold flex items-center gap-2'>
                                <TbMapPinFilled />
                                Villagrán 625, 4440000 Los Angeles, Bío Bío
                            </div>
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-6 bg-gray-100'>
                        <div className='flex justify-center items-center flex-col pb-12 lg:py-12'>
                            <div className='font-semibold flex items-center gap-2'>
                                <TbPhoneFilled />
                                +123456789
                            </div>
                            <div className='font-semibold flex items-center gap-2'>
                                <TbMail />
                                correo@gmail.com
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <LeafletMap />
        </MarketplaceLayout>
    );
};