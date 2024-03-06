export const AuthLayout = ({ children }) => {
    return (
        <section className='bg-white' >
            <div className='lg:grid lg:min-h-screen lg:grid-cols-12'>
                <section className='bg-neutral relative flex items-end lg:col-span-5 lg:h-full xl:col-span-6 h-32'>
                    <div className='hidden lg:relative lg:block lg:p-12'>
                        <h2 className='text-white text-2xl font-bold sm:text-3xl md:text-4xl mt-6 '>
                            Bienvenido al sitio oficial de la Vega Techada
                        </h2>
                        <p className='leading-relaxed text-white mt-4'>
                            Ingresa dentro del sitio y visita tus locales favoritos del sitio, pudiendo realizar pedidos en cada uno de ellos para su posterior retiro.
                        </p>
                    </div>
                </section>
                <main className='flex items-center justify-center sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 px-8 py-8'>
                    <div className='max-w-xl lg:max-w-3xl w-[70%]'>
                        <div className='relative block lg:hidden'>
                            <h1 className='text-2xl text-center text-gray-900 font-bold sm:text-3xl md:text-4xl mt-2 '>
                                Bienvenido al sitio oficial de la Vega Techada
                            </h1>
                            <p className='leading-relaxed text-gray-500 mt-4'>
                                Ingresa dentro del sitio y visita tus locales favoritos del sitio, pudiendo realizar pedidos en cada uno de ellos para su posterior retiro.
                            </p>
                        </div>
                        {children}
                    </div>
                </main>
            </div>
        </section >
    );
};