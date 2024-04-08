import { Table } from 'react-daisyui';

import { usePaginatorSearchBar } from '../../../hooks';
import { ShoppingCartTableItem } from './ShoppingCartTableItem';
import { PaginatorSearchBar } from '../../../components';

export const ShoppingCartTable = ({ products }) => {
    const { search, currentPage, onSearchBarChange, onFilteredElements, onPrevPage, onNextPage } = usePaginatorSearchBar({ elements: products, propToSearch: 'name' });

    return (
        <PaginatorSearchBar
            hideSearchBar={true}
            search={search}
            currentPage={currentPage}
            onSearchBarChange={onSearchBarChange}
            onFilteredElements={onFilteredElements}
            onPrevPage={onPrevPage}
            onNextPage={onNextPage}
            placeholder='Ingresa el nombre del producto que desees buscar'>
            <div className='overflow-x-auto'>
                <Table zebra>
                    <Table.Head>
                        <span>Producto</span>
                        <span>Precio Unidad</span>
                        <span>Cantidad</span>
                        <span>Precio Total</span>
                        <span>Remover</span>
                    </Table.Head>
                    <Table.Body className='overflow-y-auto'>
                        {
                            onFilteredElements().map((p) => (
                                <ShoppingCartTableItem
                                    key={p.id}
                                    {...p} />
                            ))
                        }
                    </Table.Body>
                </Table>
            </div>
        </PaginatorSearchBar>
    );
};