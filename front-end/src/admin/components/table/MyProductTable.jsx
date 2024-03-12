import { Table } from 'react-daisyui';

import { usePaginatorSearchBar } from '../../../hooks';
import { PaginatorSearchBar } from '../../../components';
import { MyProductTableItem } from './MyProductTableItem';

export const MyProductTable = ({ products }) => {
    const { search, currentPage, setElements, onSearchBarChange, onFilteredElements, onPrevPage, onNextPage } = usePaginatorSearchBar({ elements: products, propToSearch: 'name' });

    return (
        <PaginatorSearchBar
            search={search}
            currentPage={currentPage}
            onSearchBarChange={onSearchBarChange}
            onFilteredElements={onFilteredElements}
            onPrevPage={onPrevPage}
            onNextPage={onNextPage}
            placeholder='Ingresa el nombre del producto que desees buscar'>
            <div className='overflow-x-auto'>
                <Table className='mb-4'>
                    <Table.Head>
                        <span>ID</span>
                        <span>Nombre</span>
                        <span>Tipo Oferta</span>
                        <span>Categoria</span>
                        <span>Unidad Medida</span>
                        <span>Stock</span>
                        <span>¿Visible?</span>
                        <span>Precio</span>
                    </Table.Head>
                    <Table.Body>
                        {
                            onFilteredElements().map((e) => (
                            <MyProductTableItem
                                    key={e.id}
                                    {...e} />
                            ))
                        }
                    </Table.Body>
                </Table>
            </div>
        </PaginatorSearchBar>
    );
};