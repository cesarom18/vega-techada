import defaultImg from '/img/img-test.jpg';

export const Banner = ({ bannerTitle, bannerImg = defaultImg }) => {
    return (
        <div className='relative flex content-center items-center justify-center h-[30vh] pt-16'>
            <div
                className='absolute top-0 bg-center bg-cover w-full h-full'
                style={{ backgroundImage: `url(${bannerImg})` }}>
                <span className='bg-black absolute opacity-75  w-full h-full' />
            </div>
            <div className='container relative mx-auto'>
                <div className='flex flex-wrap items-end'>
                    <div className='text-center w-full lg:w-6/12 px-4 ml-auto mr-auto'>
                        <div className='px-12'>
                            <h1 className='text-gray-50 text-5xl font-semibold'>
                                {bannerTitle}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};