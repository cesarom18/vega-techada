import { Form, Button, Input, Select, Tooltip } from 'react-daisyui';
import { TbInfoCircle } from 'react-icons/tb';

export const UserRegisterForm = () => {
    return (
        <Form className='flex flex-col items-center justify-center gap-4'>
            <div className='w-full'>
                <Form.Label
                    title='Nombre Completo'
                    htmlFor='fullName' />
                <Input
                    type='text'
                    name='fullName'
                    className='w-full'
                    placeholder='Ingresa el nombre completo' />
            </div>
            <div className='w-full'>
                <Form.Label
                    title='Correo Electronico'
                    htmlFor='email' />
                <Input
                    type='email'
                    name='email'
                    className='w-full'
                    placeholder='Ingresa el correo electronico' />
            </div>
            <div className='w-full'>
                <Form.Label
                    title='Contraseña'
                    htmlFor='password' />
                <Input
                    type='password'
                    name='password'
                    className='w-full'
                    placeholder='Ingresa la contraseña' />
            </div>
            <div className='w-full'>
                <Form.Label
                    title='Numero Telefonico'
                    htmlFor='phone' />
                <Input
                    type='text'
                    name='phone'
                    className='w-full'
                    placeholder='Ingresa el numero telefonico' />
            </div>
            <div className='w-full'>
                <Form.Label
                    title='Fecha De Nacimiento'
                    htmlFor='birthDate' />
                <Input
                    type='date'
                    name='birthDate'
                    className='w-full'
                    placeholder='Ingresa la fecha de nacimiento' />
            </div>
            <div className='w-full'>
                <Form.Label
                    title='Disponibilidad'
                    htmlFor='userType'
                    className='flex items-center justify-start gap-2'>
                    <Tooltip
                        position='right'
                        message='Ten en cuenta que dependiendo del tipo de usuario este tendra acceso a mas o menos funcionalidades. Para mas informacion puedes visitar "Ayuda y Consejos".'
                        className='text-justify p-2'>
                        <TbInfoCircle />
                    </Tooltip>
                </Form.Label>
                <Select
                    name='userType'
                    className='w-full'
                    defaultValue={0}>
                    <option value={0}>Administrador</option>
                    <option value={1}>Dueño De Local</option>
                    <option value={2}>Comprador</option>
                </Select>
            </div>
            <div className='text-center w-full mt-4'>
                <Button
                    color='neutral'
                    size='md'
                    className='w-full lg:w-min'>
                    Registrar
                </Button>
            </div>
        </Form >
    );
};