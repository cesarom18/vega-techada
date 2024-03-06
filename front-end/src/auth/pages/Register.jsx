import { Input, Checkbox, Button } from 'react-daisyui';

import { AuthLayout } from '../layout/AuthLayout';

export const Register = () => {
    return (
        <AuthLayout>
            <form className='mt-8 grid grid-cols-6 gap-6'>
                <div className='col-span-6 sm:col-span-3'>
                    <label
                        htmlFor='firstName'
                        className='block text-sm font-medium text-gray-700'>
                        Nombre
                    </label>
                    <Input
                        type='text'
                        name='firstName'
                        className='mt-2 w-full'
                        placeholder='Ingrese tu nombre' />
                </div>
                <div className='col-span-6 sm:col-span-3'>
                    <label
                        htmlFor='lastName'
                        className='block text-sm font-medium text-gray-700'>
                        Apellido
                    </label>
                    <Input
                        type='text'
                        name='lastName'
                        className='mt-2 w-full'
                        placeholder='Ingrese tu apellido' />
                </div>
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
                <div className='col-span-6 sm:col-span-3'>
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
                <div className='col-span-6 sm:col-span-3'>
                    <label
                        htmlFor='confirmPassword'
                        className='block text-sm font-medium text-gray-700'>
                        Confirme Contraseña
                    </label>
                    <Input
                        type='password'
                        name='confirmPassword'
                        className='mt-2 w-full'
                        placeholder='Confirme su contraseña' />
                </div>
                <div className='col-span-6'>
                    <label
                        htmlFor='rememberMe'
                        className='flex items-center gap-4'>
                        <Checkbox
                            name='rememberMe'
                            color='neutral' />
                        <span className='text-sm text-gray-700'>
                            Acepto los <a className='underline font-bold'>terminos y condiciones</a> como tambien las <a className='underline font-bold'>politicas de privacidad</a> de la Vega Techada
                        </span>
                    </label>
                </div>
                <div className='col-span-6 flex flex-col items-center gap-4'>
                    <Button
                        color='neutral'
                        className='text-base w-full'>
                        Registrarme
                    </Button>
                    <p className='mt-4 text-sm sm:mt-0'>
                        ¿Ya tienes una cuenta? <a className='underline font-bold'>Inicia Sesion</a>.
                    </p>
                </div>
            </form>
        </AuthLayout>
    );
};