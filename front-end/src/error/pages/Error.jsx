import { Link } from 'react-router-dom';

export const Error = () => {
  return (
    <div className='grid h-screen place-content-center bg-gray-200 px-4'>
      <div className='text-center'>
        <h1 className='text-9xl font-black text-gray-800'>404</h1>
        <p className='text-2xl font-bold tracking-tight text-gray-700 sm:text-4xl'>Oops!</p>
        <p className='text-gray-500 mt-4 '>No pudimos encontrar la pagina que estas buscando.</p>
        <Link className='btn btn-ghost bg-gray-800 hover:bg-gray-700 text-gray-50 mt-6 px-5 py-3 '>
          Volver Al Inicio
        </Link>
      </div>
    </div>
  );
};
