import { Link } from 'react-router-dom';
import { TbAward, TbHeart, TbRefresh, TbUsers, TbRocket, TbCircleArrowRight, TbBox, TbChartBar } from 'react-icons/tb';

export const LandingServices = () => {
  return (
    <>
      <section className='relative bg-gray-700 -mt-24 pb-32'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap'>
            <div className='text-center w-full md:w-4/12 pt-6 px-4'>
              <div className='relative flex flex-col min-w-0 break-words bg-gray-50 w-full mb-8 shadow-lg rounded-lg'>
                <div className='px-4 py-5 flex-auto'>
                  <div className='bg-red-400 text-gray-50 text-center inline-flex items-center justify-center shadow-lg rounded-full mb-5 p-3 w-12 h-12'>
                    <TbAward className='text-xl' />
                  </div>
                  <h6 className='text-gray-800 text-xl font-semibold'>Servicio 1</h6>
                  <p className='text-gray-700 mt-2 mb-4'>
                    Anim tempor proident pariatur officia adipisicing.
                    Excepteur incididunt laboris consectetur adipisicing ut
                    aliquip Lorem do adipisicing do laborum ipsum mollit cupidatat.
                  </p>
                </div>
              </div>
            </div>
            <div className='text-center w-full md:w-4/12 px-4'>
              <div className='relative flex flex-col min-w-0 break-words bg-gray-50 w-full mb-8 shadow-lg rounded-lg'>
                <div className='px-4 py-5 flex-auto'>
                  <div className='bg-blue-400 text-white  text-center inline-flex items-center justify-center shadow-lg rounded-full mb-5 p-3 w-12 h-12'>
                    <TbHeart className='text-xl' />
                    <i className='fas fa-retweet'></i>
                  </div>
                  <h6 className='text-gray-800 text-xl font-semibold'>Servicio 2</h6>
                  <p className='text-gray-700 mt-2 mb-4'>
                    Anim tempor proident pariatur officia adipisicing.
                    Excepteur incididunt laboris consectetur adipisicing ut
                    aliquip Lorem do adipisicing do laborum ipsum mollit cupidatat.
                  </p>
                </div>
              </div>
            </div>
            <div className='text-center w-full md:w-4/12 pt-6 px-4'>
              <div className='relative flex flex-col min-w-0 break-words bg-gray-50 w-full mb-8 shadow-lg rounded-lg'>
                <div className='px-4 py-5 flex-auto'>
                  <div className='bg-green-400 text-white  text-center inline-flex items-center justify-center shadow-lg rounded-full mb-5 p-3 w-12 h-12'>
                    <TbRefresh className='text-xl' />
                  </div>
                  <h6 className='text-gray-800 text-xl font-semibold'>Servicio 3</h6>
                  <p className='text-gray-700 mt-2 mb-4'>
                    Anim tempor proident pariatur officia adipisicing.
                    Excepteur incididunt laboris consectetur adipisicing ut
                    aliquip Lorem do adipisicing do laborum ipsum mollit cupidatat.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-wrap items-center mt-32'>
            <div className='w-full md:w-5/12 px-4 mr-auto ml-auto mb-8 md:mb-0'>
              <div className='bg-purple-400 text-gray-50 text-center inline-flex items-center justify-center shadow-lg rounded-full mb-6 p-3 w-16 h-16'>
                <TbUsers className='text-xl' />
              </div>
              <h3 className='text-gray-50 text-3xl font-semibold leading-normal mb-2'>
                Texto de ejemplo
              </h3>
              <p className='text-lg text-gray-100 font-light leading-relaxed mt-4 mb-4'>
                Anim tempor proident pariatur officia adipisicing.
                Excepteur incididunt laboris consectetur adipisicing ut
                aliquip Lorem do adipisicing do laborum ipsum mollit cupidatat.
              </p>
              <p className='text-lg text-gray-100 font-light leading-relaxed mt-0 mb-4'>
                Anim tempor proident pariatur officia adipisicing.
                Excepteur incididunt laboris consectetur adipisicing ut
                aliquip Lorem do adipisicing do laborum ipsum mollit cupidatat.
              </p>
              <Link
                to=''
                className='btn btn-ghost bg-gray-50 hover:bg-gray-200 text-gray-800'>
                Enlace de ejemplo
                <TbCircleArrowRight className='text-xl' />
              </Link>
            </div>
            <div className='w-full md:w-4/12 px-4 mr-auto ml-auto'>
              <div className='relative bg-pink-50 flex flex-col break-words shadow-lg rounded-lg w-full min-w-0 mb-6 '>
                <img
                  alt='...'
                  src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80'
                  className='w-full align-middle rounded-t-lg' />
                <blockquote className='relative p-8 mb-4'>
                  <h4 className='text-xl font-bold text-gray-800'>
                    Texto de ejemplo
                  </h4>
                  <p className='text-md font-light mt-2 text-gray-700'>
                    Anim tempor proident pariatur officia adipisicing.
                    Excepteur incididunt laboris consectetur adipisicing ut
                    aliquip Lorem do adipisicing do laborum ipsum mollit cupidatat.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        <div className='absolute bottom-0 w-full'>
          <svg
            className='w-full '
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1440 320'>
            <path
              fill='#f9fafb'
              fill-opacity='1'
              d='M0,256L80,245.3C160,235,320,213,480,213.3C640,213,800,235,960,240C1120,245,1280,235,1360,229.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z' />
          </svg>
        </div>
      </section>
      <section className='relative py-36'>
        <div className='container mx-auto px-4'>
          <div className='items-center flex flex-wrap'>
            <div className='w-full md:w-4/12 ml-auto mr-auto px-4'>
              <img
                alt='...'
                className='rounded-lg shadow-lg max-w-full mb-8 md:mb-0'
                src='https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80' />
            </div>
            <div className='w-full md:w-5/12 ml-auto mr-auto px-4'>
              <div className='md:pr-12'>
                <div className='bg-teal-400 text-gray-50 text-center inline-flex items-center justify-center shadow-lg rounded-full w-16 h-16 mb-6  p-3'>
                  <TbRocket className='text-xl' />
                </div>
                <h3 className='text-3xl font-semibold'>Texto ejemplo</h3>
                <p className='text-lg leading-relaxed text-gray-600 mt-4'>
                  Anim tempor proident pariatur officia adipisicing.
                  Excepteur incididunt laboris consectetur adipisicing ut
                  aliquip Lorem do adipisicing do laborum ipsum mollit cupidatat.
                </p>
                <ul className='list-none mt-6'>
                  <li className='py-2'>
                    <div className='flex'>
                      <div className='flex items-center'>
                        <span className='text-gray-50 bg-gray-800 text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full mr-3'>
                          <TbBox />
                        </span>
                      </div>
                      <div>
                        <h4 className='text-gray-600'>Ejemplo 1</h4>
                      </div>
                    </div>
                  </li>
                  <li className='py-2'>
                    <div className='flex'>
                      <div className='flex items-center'>
                        <span className='text-gray-50 bg-gray-800 text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full mr-3'>
                          <TbBox />
                        </span>
                      </div>
                      <div>
                        <h4 className='text-gray-600'>Ejemplo 2</h4>
                      </div>
                    </div>
                  </li>
                  <li className='py-2'>
                    <div className='flex'>
                      <div className='flex items-center'>
                        <span className='text-gray-50 bg-gray-800 text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full mr-3'>
                          <TbBox />
                        </span>
                      </div>
                      <div>
                        <h4 className='text-gray-600'>Ejemplo 3</h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='absolute bottom-0 w-full'>
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
      </section>
      <section className='bg-gray-700'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap text-center justify-center'>
            <div className='w-full lg:w-6/12 px-4'>
              <h2 className='text-gray-50 text-4xl font-semibold'>Texto ejemplo</h2>
              <p className='text-lg leading-relaxed mt-4 mb-4 text-gray-200'>
                Anim tempor proident pariatur officia adipisicing.
                Excepteur incididunt laboris consectetur adipisicing ut
                aliquip Lorem do adipisicing do laborum ipsum mollit cupidatat.
              </p>
            </div>
          </div>
          <div className='flex flex-wrap mt-12 justify-center'>
            <div className='w-full lg:w-3/12 px-4 text-center'>
              <div className='bg-gray-50 text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full  inline-flex items-center justify-center'>
                <TbChartBar className='text-xl' />
              </div>
              <h6 className='text-xl mt-5 font-semibold text-gray-50'>Texto ejemplo 1</h6>
              <p className='mt-2 mb-4 text-gray-200'>
                Irure quis sunt nulla ipsum incididunt ad Lorem reprehenderit esse labore in. Magna Lorem consectetur
              </p>
            </div>
            <div className='w-full lg:w-3/12 px-4 text-center'>
              <div className='bg-gray-50 text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full inline-flex items-center justify-center'>
                <TbChartBar className='text-xl' />
              </div>
              <h5 className='text-xl mt-5 font-semibold text-gray-50'>Texto ejemplo 2</h5>
              <p className='mt-2 mb-4 text-gray-200'>
                Irure quis sunt nulla ipsum incididunt ad Lorem reprehenderit esse labore in. Magna Lorem consectetur
              </p>
            </div>
            <div className='w-full lg:w-3/12 px-4 text-center'>
              <div className='bg-gray-50 text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full inline-flex items-center justify-center'>
                <TbChartBar className='text-xl' />
              </div>
              <h5 className='text-xl mt-5 font-semibold text-gray-50'>Launch time</h5>
              <p className='mt-2 mb-4 text-gray-200'>
                Irure quis sunt nulla ipsum incididunt ad Lorem reprehenderit esse labore in. Magna Lorem consectetur
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};