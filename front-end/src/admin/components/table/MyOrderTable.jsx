import { Table } from 'react-daisyui';

import { usePaginatorSearchBar } from '../../../hooks';
import { PaginatorSearchBar } from '../../../components';
import { MyOrderTableItem } from './MyOrderTableItem';
import { useEffect } from 'react';

export const MyOrderTable = ({ orders }) => {
    const { search, currentPage, setElements, onSearchBarChange, onFilteredElements, onPrevPage, onNextPage } = usePaginatorSearchBar();

    useEffect(() => {
        setElements(orders);
    }, []);

    return (
        <PaginatorSearchBar
            search={search}
            currentPage={currentPage}
            onSearchBarChange={onSearchBarChange}
            onFilteredElements={onFilteredElements}
            onPrevPage={onPrevPage}
            onNextPage={onNextPage}
            placeholder='Ingresa el nombre de quien realizo el pedido'>
            <div className='overflow-x-auto'>
                <Table className='mb-4'>
                    <Table.Head>
                        <span>ID</span>
                        <span>Solicitante</span>
                        <span>Estado</span>
                        <span>Fecha De Solicitud</span>
                        <span>Cantidad De Productos</span>
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
            </div>
        </PaginatorSearchBar>
    )
}
