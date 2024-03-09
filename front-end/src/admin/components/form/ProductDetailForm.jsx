import { Button, FileInput, Input, Select, Textarea } from 'react-daisyui';

export const ProductDetailForm = () => {
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
                    value={name}
                    placeholder='Ingresa el nombre del producto' />
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
                    placeholder='Ingresa la descripcion del producto' />
            </div>
            <div className='flex flex-col form-control w-full'>
                <label
                    htmlFor='price'
                    className='label'>
                    Precio
                </label>
                <Input
                    type='number'
                    name='price'
                    placeholder='Ingresa el precio del producto' />
            </div>
            <div className='flex flex-col form-control w-full'>
                <label
                    htmlFor='offerType'
                    className='label'>
                    Tipo Oferta
                </label>
                <Select
                    name='offerType'
                    defaultValue={0}>
                    <option value={0}>Producto</option>
                    <option value={1}>Servicio</option>
                </Select>
            </div>
            <div className='flex flex-col form-control w-full'>
                <label
                    htmlFor='category'
                    className='label'>
                    Categoria
                </label>
                <Select
                    name='category'
                    defaultValue={0}>
                    <option value={0}>Categoria 1</option>
                    <option value={1}>Categoria 2</option>
                </Select>
            </div>
            <div className='flex flex-col form-control w-full'>
                <label
                    htmlFor='image'
                    className='label'>
                    Imagen Producto
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
                    Registrar
                </Button>
            </div>
        </form>
    );
};