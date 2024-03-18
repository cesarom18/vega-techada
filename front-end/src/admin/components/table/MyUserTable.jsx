import { Table } from 'react-daisyui';

import { usePaginatorSearchBar } from '../../../hooks';
import { PaginatorSearchBar } from '../../../components';
import { MyUserTableItem } from './MyUserTableItem';

export const MyUserTable = ({ users }) => {
    const { search, currentPage, onSearchBarChange, onFilteredElements, onPrevPage, onNextPage } = usePaginatorSearchBar({ elements: users, propToSearch: 'fullName' });

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
                        <span>Nombre Completo</span>
                        <span>Fecha De Nacimiento</span>
                        <span>Correo Electronico</span>
                        <span>Telefono</span>
                        <span>Tipo Usuario</span>
                    </Table.Head>
                    <Table.Body>
                        {
                            onFilteredElements().map((e) => (
                                <MyUserTableItem
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