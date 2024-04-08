import { Link } from 'react-router-dom';
import { Form, Input, Checkbox, Button, Link as LinkTailwind } from 'react-daisyui';

import { AuthLayout } from '../layout/AuthLayout';

export const Register = () => {
    return (
        <AuthLayout title='Crea tu cuenta'>
            <Form className='grid grid-cols-6 gap-6 mt-r'>
                <div className='col-span-6 sm:col-span-3'>
                    <Form.Label
                        title='Nombre Completo'
                        htmlFor='fullName' />
                    <Input
                        type='text'
                        name='fullName'
                        className='mt-2 w-full'
                        placeholder='Ingresa tu nombre completo' />
                </div>
                <div className='col-span-6 sm:col-span-3'>
                    <Form.Label
                        title='RUT'
                        htmlFor='rut' />
                    <Input
                        type='text'
                        name='rut'
                        className='mt-2 w-full'
                        placeholder='Ingresa tu RUT' />
                </div>
                <div className='col-span-6'>
                    <Form.Label
                        title='Correo Electronico'
                        htmlFor='email' />
                    <Input
                        type='email'
                        name='email'
                        className='mt-2 w-full'
                        placeholder='Ingresa tu correo electronico' />
                </div>
                <div className='col-span-6 sm:col-span-3'>
                    <Form.Label
                        title='Contraseña'
                        htmlFor='password' />
                    <Input
                        type='password'
                        name='password'
                        className='mt-2 w-full'
                        placeholder='Ingresa tu contraseña' />
                </div>
                <div className='col-span-6 sm:col-span-3'>
                    <Form.Label
                        title='Confirma Contraseña'
                        htmlFor='confirmPassword' />
                    <Input
                        type='password'
                        name='confirmPassword'
                        className='mt-2 w-full'
                        placeholder='Confirma tu contraseña' />
                </div>
                <div className='col-span-6 flex gap-2 items-center'>
                    <label
                        htmlFor='rememberMe'
                        className='flex items-center gap-4'>
                        <Checkbox
                            name='rememberMe'
                            color='neutral' />
                        <span className='text-sm text-gray-700'>
                            Acepto los <LinkTailwind className='font-bold'>terminos y condiciones</LinkTailwind> como tambien las <LinkTailwind className='font-bold'>politicas de privacidad</LinkTailwind> de la Vega Techada
                        </span>
                    </label>
                </div>
                <div className='col-span-6 flex flex-col items-center gap-4'>
                    <Button
                        color='neutral'
                        size='md'
                        fullWidth>
                        Crear Cuenta
                    </Button>
                    <p className='text-gray-700 text-sm  mt-4 sm:mt-0'>
                        ¿Ya tienes una cuenta?
                        <Link to='/auth/login'>
                            <LinkTailwind className='font-bold'> Inicia Sesion</LinkTailwind>
                        </Link>.
                    </p>
                </div>
            </Form>
        </AuthLayout>
    );
};