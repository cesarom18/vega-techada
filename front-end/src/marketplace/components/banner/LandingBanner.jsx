import LandingBannerImg from '/img/landing-banner.jpg';

export const LandingBanner = () => {
    return (
        <div className='relative pt-16 pb-32 flex content-center items-center justify-center h-[95vh]'>
            <div
                className='absolute top-0 w-full h-full bg-center bg-cover'
                style={{ backgroundImage: `url(${LandingBannerImg})` }}>
                <span className='bg-black absolute opacity-75  w-full h-full' />
            </div>
            <div className='container relative mx-auto'>
                <div className='items-center flex flex-wrap'>
                    <div className='w-full lg:w-6/12 px-4 ml-auto mr-auto text-center'>
                        <div className='px-12'>
                            <h1 className='text-gray-50 font-semibold text-5xl'>
                                Realiza tus pedidos con nosotros
                            </h1>
                            <p className='mt-4 text-lg text-gray-100'>
                                La VegaTechada ahora esta disponible en todos los dispositivos,
                                busca tu tienda de preferencia y realiza tus pedidos con tus productos preferidos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};