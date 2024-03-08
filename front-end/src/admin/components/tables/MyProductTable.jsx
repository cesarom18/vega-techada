import { Checkbox, Table } from 'react-daisyui';

import { products } from '../../data';
import { usePaginatorSearchBar } from '../../../hooks';
import { MyProductTableItem } from './MyProductTableItem';
import { PaginatorSearchBar } from '../../../components';

const dataLegth = products.length;

export const MyProductTable = () => {
    const { search, currentPage, onSearchBarChange, onFilteredElements, onPrevPage, onNextPage } = usePaginatorSearchBar(products);

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
                        <Checkbox color='neutral' />
                        <span>ID</span>
                        <span>Nombre</span>
                        <span>Tipo Oferta</span>
                        <span>Categoria</span>
                        <span>Disponibilidad</span>
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