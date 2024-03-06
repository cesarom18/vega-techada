import { Link } from 'react-router-dom';
import { Input, Checkbox, Button } from 'react-daisyui';

import { AuthLayout } from '../layout/AuthLayout';

export const Login = () => {
    return (
        <AuthLayout>
            <form className='grid grid-cols-6 gap-6 mt-8'>
                <div className='col-span-6'>
                    <label
                        htmlFor='email'
                        className='block text-sm font-medium text-gray-700'>
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
                        className='block text-sm font-medium text-gray-700'>
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
                        className='flex items-center gap-4'>
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
                        color='neutral'
                        className='text-base w-full'>
                        Iniciar Sesion
                    </Button>
                    <p className='mt-4 text-sm sm:mt-0'>
                        ¿No tienes una cuenta? <Link to='/auth/register' className='underline font-bold'>Registrate</Link>.
                    </p>
                </div>
            </form>
        </AuthLayout>
    );
};