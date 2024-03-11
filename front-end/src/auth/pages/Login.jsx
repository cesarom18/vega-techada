import { Link } from 'react-router-dom';
import { Input, Checkbox, Button, Link as LinkTailwind } from 'react-daisyui';

import { AuthLayout } from '../layout/AuthLayout';

export const Login = () => {
    return (
        <AuthLayout title='Inicia Sesion'>
            <form className='grid grid-cols-6 gap-6 mt-4'>
                <div className='col-span-6'>
                    <label
                        htmlFor='email'
                        className='label block text-sm font-medium text-gray-700'>
                        Correo Electronico
                    </label>
                    <Input
                        type='email'
                        name='email'
                        className='mt-2 w-full'
                        placeholder='Ingrese su correo electronico' />
                </div>
                <div className='col-span-6'>
                    <label
                        htmlFor='password'
                        className='label block text-sm font-medium text-gray-700'>
                        Contraseña
                    </label>
                    <Input
                        type='password'
                        name='password'
                        className='mt-2 w-full'
                        placeholder='Ingrese su contraseña' />
                </div>
                <div className='col-span-6'>
                    <label
                        htmlFor='rememberMe'
                        className='label flex items-center justify-start gap-4'>
                        <Checkbox
                            name='rememberMe'
                            color='neutral' />
                        <span className='text-sm text-gray-700'>
                            Recuerdame
                        </span>
                    </label>
                </div>
                <div className='col-span-6 flex flex-col items-center gap-4'>
                    <Button
                        color='ghost'
                        className='bg-gray-800 hover:bg-gray-700 text-gray-50 w-full'>
                        Iniciar Sesion
                    </Button>
                    <p className='mt-4 text-sm text-gray-700 sm:mt-0'>
                        ¿No tienes una cuenta?
                        <Link to='/auth/register'>
                            <LinkTailwind className='font-bold'> Crea una con nosotros</LinkTailwind>
                        </Link>.
                    </p>
                </div>
            </form>
        </AuthLayout>
    );
};