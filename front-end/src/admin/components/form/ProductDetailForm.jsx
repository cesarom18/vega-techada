import { Form, Button, FileInput, Input, Select, Textarea, Tooltip } from 'react-daisyui';
import { TbInfoCircle } from 'react-icons/tb';

export const ProductDetailForm = () => {
    return (
        <Form className='flex flex-col items-start justify-center gap-4'>
            <div className='w-full'>
                <Form.Label
                    title='Nombre'
                    htmlFor='name' />
                <Input
                    type='text'
                    name='name'
                    className='w-full'
                    placeholder='Ingresa el nombre del producto' />
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
                    placeholder='Ingresa la descripcion del producto' />
            </div>
            <div className='w-full'>
                <Form.Label
                    title='Stock'
                    htmlFor='stock' />
                <Input
                    type='number'
                    name='stock'
                    className='w-full'
                    placeholder='Ingresa el stock del producto' />
            </div>
            <div className='w-full'>
                <Form.Label
                    title='Precio'
                    htmlFor='price' />
                <Input
                    type='number'
                    name='price'
                    className='w-full'
                    placeholder='Ingresa el precio del producto' />
            </div>
            <div className='w-full'>
                <Form.Label
                    title='Disponibilidad'
                    htmlFor='availability'
                    className='flex items-center justify-start gap-2'>
                    <Tooltip
                        position='right'
                        message='La disponibilidad del producto solamente afecta al momento de mostrarlo dentro de su tienda virtual. Por ejemplo, si tiene stock de dicho producto pero quiere ocultarlo en la tienda para el cliente, seleccione "No" y caso contrario seleccione "Si".'
                        className='text-justify p-2'>
                        <TbInfoCircle />
                    </Tooltip>
                </Form.Label>
                <Select
                    name='availability'
                    className='w-full'>
                    <option value={true}>Si</option>
                    <option value={true}>No</option>
                </Select>
            </div>
            <div className='w-full'>
                <Form.Label
                    title='Tipo Oferta'
                    htmlFor='offerType' />
                <Select
                    name='offerType'
                    className='w-full'
                    defaultValue={0}>
                    <option value={0}>Producto</option>
                    <option value={1}>Servicio</option>
                </Select>
            </div>
            <div className='w-full'>
                <Form.Label
                    title='Categoria'
                    htmlFor='category' />
                <Select
                    name='category'
                    className='w-full'
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
            <div className='w-full'>
                <Form.Label
                    title='Tipo Unidad'
                    htmlFor='unitType' />
                <Select
                    name='unitType'
                    className='w-full'
                    defaultValue={0}>
                    <option value={0}>Unidades</option>
                    <option value={1}>Kilogramos</option>
                </Select>
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
                    Actualizar
                </Button>
            </div>
        </Form>
    );
};