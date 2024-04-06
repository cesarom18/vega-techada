import { Button, FileInput, Input, Textarea, Checkbox, Form } from 'react-daisyui';

export const StoreDetailForm = () => {
    return (
        <form className='flex flex-col items-center justify-center gap-3 w-full'>
            <div className='flex flex-col form-control w-full'>
                <label
                    htmlFor='name'
                    className='label'>
                    Nombre
                </label>
                <Input
                    type='text'
                    name='name'
                    placeholder='Ingresa el nombre de la tienda' />
            </div>
            <div className='flex flex-col form-control w-full'>
                <label
                    htmlFor='owner'
                    className='label'>
                    Dueño
                </label>
                <Input
                    type='text'
                    name='owner'
                    placeholder='Ingresa el dueño de la tienda' />
            </div>
            <div className='flex flex-col form-control w-full'>
                <label
                    htmlFor='email'
                    className='label'>
                    Correo ELectronico
                </label>
                <Input
                    type='email'
                    name='email'
                    placeholder='Ingresa el numero telefonico de la tienda' />
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
                    placeholder='Ingresa el numero telefonico de la tienda' />
            </div>
            <div className='flex flex-col form-control w-full'>
                <label
                    htmlFor='description'
                    className='label'>
                    Descripcion
                </label>
                <Textarea
                    name='description'
                    maxLength={200}
                    rows={4}
                    className='resize-none'
                    placeholder='Ingresa la descripcion de la tienda' />
            </div>
            <div className='flex flex-col form-control w-full'>
                <span className='label'>Categorias De Productos</span>
                <div className='flex gap-2 items-center'>
                    <Checkbox
                        name='productCategories'
                        value='1'/>
                    <Form.Label title='Categoria 1' />
                </div>
                <div className='flex gap-2 items-center'>
                    <Checkbox
                        name='productCategories'
                        value='1'/>
                    <Form.Label title='Categoria 2' />
                </div>
            </div>
            <div className='flex flex-col form-control w-full'>
                <label
                    htmlFor='image'
                    className='label'>
                    Imagen
                </label>
                <FileInput
                    name='image'
                    bordered
                    placeholder='Ingresa una imagen para el producto' />
            </div>
            <div className='flex items-center justify-center mt-3'>
                <Button
                    color='ghost'
                    className='bg-gray-800 hover:bg-gray-700 text-gray-50 w-full'>
                    Actualizar
                </Button>
            </div>
        </form>
    );
};