import { Button, Divider } from 'react-daisyui';
import { TbBrandFacebook } from 'react-icons/tb';

export const Footer = () => {
    return (
        <footer className='bg-gray-50 pt-8 pb-6'>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-12 gap-12'>
                    <div className='col-span-12 lg:col-span-6'>
                        <h4 className='text-3xl font-semibold'>Texto ejemplo</h4>
                        <h5 className='text-lg mt-0 mb-2 text-gray-700'>
                            Aute reprehenderit adipisicing labore excepteur.Eu velit sint cillum nisi anim enim labore ullamco duis.
                        </h5>
                        <div className='mt-6'>
                            <Button
                                color='ghost'
                                size='md'
                                shape='circle'
                                className='shadow-lg font-normal items-center justify-center align-center mr-2'>
                                <TbBrandFacebook className='text-xl' />
                            </Button>
                            <Button
                                color='ghost'
                                size='md'
                                shape='circle'
                                className='shadow-lg font-normal items-center justify-center align-center mr-2'>
                                <TbBrandFacebook className='text-xl' />
                            </Button>
                            <Button
                                color='ghost'
                                size='md'
                                shape='circle'
                                className='shadow-lg font-normal items-center justify-center align-center mr-2'>
                                <TbBrandFacebook className='text-xl' />
                            </Button>
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-6'>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-6'>
                                <span className='block uppercase text-gray-800 text-sm font-semibold mb-2'>
                                    Enlaces
                                </span>
                                <ul className='list-unstyled'>
                                    <li>
                                        <a
                                            className='text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm'
                                            href='https://www.creative-tim.com/presentation'>
                                            Enlace 1
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className='text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm'
                                            href='https://blog.creative-tim.com'>
                                            Enlace 2
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className='text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm'
                                            href='https://www.github.com/creativetimofficial'>
                                            Enlace 3
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-span-6'>
                                <span className='block uppercase text-gray-800 text-sm font-semibold mb-2'>
                                    Enlaces
                                </span>
                                <ul className='list-unstyled'>
                                    <li>
                                        <a
                                            className='text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm'
                                            href='https://www.creative-tim.com/presentation'>
                                            Enlace 1
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className='text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm'
                                            href='https://blog.creative-tim.com'>
                                            Enlace 2
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className='text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm'
                                            href='https://www.github.com/creativetimofficial'>
                                            Enlace 3
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Divider className='my-6'/>
                <div className='flex flex-wrap items-center md:justify-between justify-center'>
                    <div className='w-full md:w-4/12 px-4 mx-auto text-center'>
                        <div className='text-sm text-gray-600 font-semibold py-1'>
                            Copyright © 2024 Vega Techada 
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};