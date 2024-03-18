import { Button, Input, Select, Tooltip } from 'react-daisyui';
import { TbInfoCircle } from 'react-icons/tb';


export const UserDetailForm = () => {
    return (
        <form className='flex flex-col items-center justify-center gap-3 w-full'>
            <div className='flex flex-col form-control w-full'>
                <label
                    htmlFor='fullName'
                    className='label'>
                    Nombre y Apellido
                </label>
                <Input
                    type='text'
                    name='fullName'
                    placeholder='Ingresa el nombre y apellido del usuario' />
            </div>
            <div className='flex flex-col form-control w-full'>
                <label
                    htmlFor='email'
                    className='label'>
                    Correo Electronico
                </label>
                <Input
                    type='email'
                    name='email'
                    placeholder='Ingresa el correo electronico del usuario' />
            </div>
            <div className='flex flex-col form-control w-full'>
                <label
                    htmlFor='phone'
                    className='label'>
                    Numero Telefonico
                </label>
                <Input
                    type='text'
                    name='phone'
                    placeholder='Ingresa el numero telefonico del usuario' />
            </div>
            <div className='flex flex-col form-control w-full'>
                <label
                    htmlFor='birthDate'
                    className='label'>
                    Fecha Nacimiento
                </label>
                <Input
                    type='date'
                    name='birthDate'
                    placeholder='Ingresa la fecha de nacimiento del usuario' />
            </div>
            <div className='flex flex-col form-control w-full'>
                <label
                    htmlFor='userType'
                    className='flex items-center gap-2 mb-2'>
                    Tipo Usuario
                    <Tooltip
                        position='right'
                        message='Ten en cuenta que dependiendo del tipo de usuario este tendra acceso a mas o menos funcionalidades. Para mas informacion puedes visitar "Ayuda y Consejos".'
                        className='text-justify'>
                        <TbInfoCircle />
                    </Tooltip>
                </label>
                <Select
                    name='userType'
                    defaultValue={0}>
                    <option value={0}>Administrador</option>
                    <option value={1}>Dueño De Local</option>
                    <option value={2}>Comprador</option>
                </Select>
            </div>
            <div className='flex items-center justify-center mt-3'>
                <Button
                    color='ghost'
                    className='bg-gray-800 hover:bg-gray-700 text-gray-50 w-full'>
                    Registrar
                </Button>
            </div>
        </form>
    );
};