import { Button, FileInput, Input, Textarea, Checkbox, Form } from 'react-daisyui';

export const StoreRegisterForm = () => {
    return (
        <Form className='flex flex-col items-center justify-center gap-4'>
            <div className='w-full'>
                <Form.Label
                    title='Nombre'
                    htmlFor='name' />
                <Input
                    type='text'
                    name='name'
                    className='w-full'
                    placeholder='Ingresa el nombre de la tienda' />
            </div>
            <div className='w-full'>
                <Form.Label
                    title='Dueño'
                    htmlFor='owner' />
                <Input
                    type='text'
                    name='owner'
                    className='w-full'
                    placeholder='Ingresa el dueño de la tienda' />
            </div>
            <div className='w-full'>
                <Form.Label
                    title='Correo Electronico'
                    htmlFor='email' />
                <Input
                    type='email'
                    name='email'
                    className='w-full'
                    placeholder='Ingresa el correo electronico de la tienda' />
            </div>
            <div className='w-full'>
                <Form.Label
                    title='Numero Telefonico'
                    htmlFor='phone' />
                <Input
                    type='text'
                    name='phone'
                    className='w-full'
                    placeholder='Ingresa el numero telefonico de la tienda' />
            </div>
            <div className='w-full'>
                <Form.Label
                    title='Descripcion'
                    htmlFor='description' />
                <Textarea
                    name='description'
                    maxLength={200}
                    rows={4}
                    className='resize-none w-full'
                    placeholder='Ingresa la descripcion de la tienda' />
            </div>
            <div className='w-full'>
                <Form.Label
                    title='Categorias De Producto'
                    htmlFor='productCategories' />
                <div className='flex gap-2 items-center'>
                    <Checkbox
                        name='productCategories'
                        value='1' />
                    <Form.Label title='Categoria 1' />
                </div>
                <div className='flex gap-2 items-center'>
                    <Checkbox
                        name='productCategories'
                        value='1' />
                    <Form.Label title='Categoria 2' />
                </div>
            </div>
            <div className='w-full'>
                <Form.Label
                    title='Imagen'
                    htmlFor='image' />
                <FileInput
                    name='image'
                    bordered
                    className='w-full'
                    placeholder='Ingresa una imagen para el producto' />
            </div>
            <div className='text-center w-full mt-4'>
                <Button
                    color='neutral'
                    size='md'
                    className='w-full lg:w-min'>
                    Registrar
                </Button>
            </div>
        </Form>
    );
};