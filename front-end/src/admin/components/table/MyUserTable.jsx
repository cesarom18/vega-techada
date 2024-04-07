import { Table } from 'react-daisyui';

import { usePaginatorSearchBar } from '../../../hooks';
import { PaginatorSearchBar } from '../../../components';
import { MyUserTableItem } from './MyUserTableItem';

export const MyUserTable = ({ users }) => {
    const { search, currentPage, onSearchBarChange, onFilteredElements, onPrevPage, onNextPage } = usePaginatorSearchBar({ elements: users, propToSearch: 'fullName' });

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
                        <span>Nombre Completo</span>
                        <span>Fecha De Nacimiento</span>
                        <span>Correo Electronico</span>
                        <span>Telefono</span>
                        <span>Tipo Usuario</span>
                    </Table.Head>
                    <Table.Body className='text-gray-700'>
                        {
                            onFilteredElements().map((e) => (
                                <MyUserTableItem
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