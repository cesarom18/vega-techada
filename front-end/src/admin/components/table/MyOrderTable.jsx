import { Table } from 'react-daisyui';

import { usePaginatorSearchBar } from '../../../hooks';
import { PaginatorSearchBar } from '../../../components';
import { MyOrderTableItem } from './MyOrderTableItem';

export const MyOrderTable = ({ orders }) => {
    const { search, currentPage, onSearchBarChange, onFilteredElements, onPrevPage, onNextPage } = usePaginatorSearchBar({ elements: orders, propToSearch: 'client' });

    return (
        <PaginatorSearchBar
            search={search}
            currentPage={currentPage}
            onSearchBarChange={onSearchBarChange}
            onFilteredElements={onFilteredElements}
            onPrevPage={onPrevPage}
            onNextPage={onNextPage}
            placeholder='Ingrese el nombre del cliente'>
            <div className='overflow-x-auto'>
                <Table
                    zebra
                    className='mb-4'>
                    <Table.Head className='text-gray-800'>
                        <span>ID</span>
                        <span>Cliente</span>
                        <span>Fecha De Solicitud</span>
                        <span>Hora De Solicitud</span>
                        <span>Estado</span>
                        <span>Total</span>
                    </Table.Head>
                    <Table.Body className='text-gray-700'>
                        {
                            onFilteredElements().map((e) => (
                                <MyOrderTableItem
                                    key={e.id}
                                    {...e} />
                            ))
                        }
                    </Table.Body>
                </Table>
            </div>
        </PaginatorSearchBar>
    )
}
