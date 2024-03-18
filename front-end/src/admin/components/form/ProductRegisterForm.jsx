import { Input, Textarea, Select, FileInput, Button, Tooltip } from 'react-daisyui';
import { TbInfoCircle } from 'react-icons/tb'

export const ProductRegistrationForm = () => {
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
                    htmlFor='stock'
                    className='label'>
                    Stock
                </label>
                <Input
                    type='number'
                    name='stock'
                    placeholder='Ingresa el stock del producto' />
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
                    htmlFor='availability'
                    className='flex items-center gap-2 mb-2'>
                    ¿Disponible?
                    <Tooltip
                        position='right'
                        message='La disponibilidad del producto solamente afecta al momento de mostrarlo dentro de su tienda virtual. Por ejemplo si tiene stock de dicho producto pero quiere ocultarlo en la tienda para el cliente seleccione "No" caso contrario seleccione "Si".'
                        className='text-justify'>
                        <TbInfoCircle />
                    </Tooltip>
                </label>
                <Select
                    name='availability'
                    defaultValue={false}>
                    <option value={true}>Si</option>
                    <option value={true}>No</option>
                </Select>
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
                    <option value={0}>Frutas y verduras</option>
                    <option value={1}>Carnes</option>
                    <option value={2}>Lacteos</option>
                    <option value={3}>Conservados</option>
                    <option value={4}>Pan y pasteles</option>
                    <option value={5}>Grano y legumbres</option>
                    <option value={6}>Productos secos</option>
                    <option value={7}>Comidas preparadas</option>
                    <option value={8}>Especias y condimentos</option>
                    <option value={9}>Bebidas</option>
                    <option value={10}>Confites</option>
                </Select>
            </div>
            <div className='flex flex-col form-control w-full'>
                <label
                    htmlFor='unitType'
                    className='label'>
                    Unidad De Medida
                </label>
                <Select
                    name='unitType'
                    defaultValue={0}>
                    <option value={0}>Unidades</option>
                    <option value={1}>Kilogramos</option>
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