import { Table } from 'react-daisyui';

import { usePaginatorSearchBar } from '../../../hooks';
import { PaginatorSearchBar } from '../../../components';
import { MyProductTableItem } from './MyProductTableItem';
//import { products } from '../../data';
import { useEffect, useState } from 'react';

export const MyProductTable = ({ products }) => {
    const { search, currentPage, setElements, onSearchBarChange, onFilteredElements, onPrevPage, onNextPage } = usePaginatorSearchBar();

    useEffect(() => {
        setElements(products)
    }, [])

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