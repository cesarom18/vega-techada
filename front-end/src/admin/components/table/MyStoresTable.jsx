import { Table } from 'react-daisyui';

import { usePaginatorSearchBar } from '../../../hooks';
import { PaginatorSearchBar } from '../../../components';
import { MyStoresTableItem } from './MyStoresTableItem';

export const MyStoresTable = ({ stores }) => {
    const { search, currentPage, onSearchBarChange, onFilteredElements, onPrevPage, onNextPage } = usePaginatorSearchBar({ elements: stores, propToSearch: 'owner' });

    return (
        <div div className='overflow-x-auto' >
            <PaginatorSearchBar
                search={search}
                currentPage={currentPage}
                onSearchBarChange={onSearchBarChange}
                onFilteredElements={onFilteredElements}
                onPrevPage={onPrevPage}
                onNextPage={onNextPage}
                placeholder='Ingrese el nombre del dueño'>
                <Table className='mb-4'>
                    <Table.Head>
                        <span>ID</span>
                        <span>Nombre Tienda</span>
                        <span>Nombre Dueño</span>
                        <span>Correo Electronico</span>
                        <span>Numero Telefonico</span>
                        <span>¿Disponible?</span>
                    </Table.Head>
                    <Table.Body>
                        {
                            onFilteredElements().map((e) => (
                                <MyStoresTableItem
                                    key={e.id}
                                    {...e} />
                            ))
                        }
                    </Table.Body>
                </Table>
            </PaginatorSearchBar>
        </div >
    );
};