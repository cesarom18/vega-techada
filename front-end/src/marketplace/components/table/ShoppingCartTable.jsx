import { Table } from 'react-daisyui';

import { ShoppingCartTableItem } from './ShoppingCartTableItem';

export const ShoppingCartTable = ({ products }) => {
    return (
        <div className='overflow-x-auto'>
            <Table zebra className='border'>
                <Table.Head className='bg-gray-800 text-gray-50 font-semibold'>
                    <span>Producto</span>
                    <span>Precio Unidad</span>
                    <span>Cantidad</span>
                    <span>Precio Total</span>
                    <span>Remover</span>
                </Table.Head>
                <Table.Body className='overflow-y-auto'>
                    {
                        products.map((p) => (
                            <ShoppingCartTableItem 
                                key={p.id}
                                {...p}/>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    );
};