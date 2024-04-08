import LandingBannerImg from '/img/img-test.jpg';

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
            <div className='absolute bottom-20 w-full'>
                <svg
                    className='w-full'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 1440 320'>
                    <path
                        fill='#374151'
                        fill-opacity='1'
                        d='M0,256L80,245.3C160,235,320,213,480,213.3C640,213,800,235,960,240C1120,245,1280,235,1360,229.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z' />
                </svg>
            </div>
        </div>
    );
};