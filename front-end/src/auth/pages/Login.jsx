import { Link } from 'react-router-dom';
import { Form, Input, Checkbox, Button, Link as LinkTailwind } from 'react-daisyui';

import { AuthLayout } from '../layout/AuthLayout';

export const Login = () => {
    return (
        <AuthLayout title='Inicia Sesion'>
            <Form className='grid grid-cols-6 gap-6 mt-4'>
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
                <div className='col-span-6'>
                    <Form.Label
                        title='Contraseña'
                        htmlFor='password'/>
                    <Input
                        type='password'
                        name='password'
                        className='mt-2 w-full'
                        placeholder='Ingresa tu contraseña' />
                </div>
                <div className='col-span-6 flex gap-2 items-center'>
                    <Checkbox
                        name='rememberMe'
                        color='neutral' />
                    <Form.Label
                        title='Recuerdame'
                        htmlFor='rememberMe' />
                </div>
                <div className='col-span-6 flex flex-col items-center gap-4'>
                    <Button
                        color='neutral'
                        size='md'
                        fullWidth>
                        Iniciar Sesion
                    </Button>
                    <p className='text-gray-700 text-sm mt-4 sm:mt-0'>
                        ¿No tienes una cuenta?
                        <Link to='/auth/register'>
                            <LinkTailwind className='font-bold'> Crea una con nosotros</LinkTailwind>
                        </Link>.
                    </p>
                </div>
            </Form>
        </AuthLayout>
    );
};