import { Table } from 'react-daisyui';

import { usePaginatorSearchBar } from '../../../hooks';
import { PaginatorSearchBar } from '../../../components';
import { MyOrderTableItem } from './MyOrderTableItem';

export const MyOrderTable = ({ orders }) => {
    const { search, currentPage, onSearchBarChange, onFilteredElements, onPrevPage, onNextPage } = usePaginatorSearchBar({ elements: orders, propToSearch: 'client' });

    return (
        <div div className='overflow-x-auto' >
            <PaginatorSearchBar
                search={search}
                currentPage={currentPage}
                onSearchBarChange={onSearchBarChange}
                onFilteredElements={onFilteredElements}
                onPrevPage={onPrevPage}
                onNextPage={onNextPage}
                placeholder='Ingrese el nombre del cliente'>
                <Table className='mb-4'>
                    <Table.Head>
                        <span>ID</span>
                        <span>Cliente</span>
                        <span>Fecha De Solicitud</span>
                        <span>Hora De Solicitud</span>
                        <span>Estado</span>
                        <span>Total</span>
                    </Table.Head>
                    <Table.Body>
                        {
                            onFilteredElements().map((e) => (
                                <MyOrderTableItem
                                    key={e.id}
                                    {...e} />
                            ))
                        }
                    </Table.Body>
                </Table>
            </PaginatorSearchBar>
        </div >
    )
}
