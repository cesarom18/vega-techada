import { Table } from 'react-daisyui';

import { usePaginatorSearchBar } from '../../../hooks';
import { PaginatorSearchBar } from '../../../components';
import { OrderDetailTableItem } from './OrderDetailTableItem';

export const OrderDetailTable = ({ orderProducts }) => {
  const { search, currentPage, onSearchBarChange, onFilteredElements, onPrevPage, onNextPage } = usePaginatorSearchBar({ elements: orderProducts, propToSearch: 'name' });

  return (
    <PaginatorSearchBar
      search={search}
      currentPage={currentPage}
      onSearchBarChange={onSearchBarChange}
      onFilteredElements={onFilteredElements}
      onPrevPage={onPrevPage}
      onNextPage={onNextPage}
      placeholder='Ingresa el nombre del producto'>
      <div className='overflow-x-auto'>
        <Table className='mb-4'>
          <Table.Head className='text-gray-800'>
            <span>Nombre</span>
            <span>Tipo Oferta</span>
            <span>Categoria</span>
            <span>Disponibilidad</span>
            <span>Precio</span>
          </Table.Head>
          <Table.Body className='text-gray-700'>
            {
              onFilteredElements()?.map((e) => (
                <OrderDetailTableItem
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
