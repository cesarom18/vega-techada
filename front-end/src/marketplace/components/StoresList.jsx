import { usePaginatorSearchBar } from '../../hooks';

import { PaginatorSearchBar } from '../../components/PaginatorSearchBar';
import { StoresItem } from './StoresItem';

export const StoresList = ({ stores }) => {
  const { search, currentPage, onSearchBarChange, onFilteredElements, onPrevPage, onNextPage } = usePaginatorSearchBar({ elements: stores, propToSearch: 'name' });

  return (
    <PaginatorSearchBar
      search={search}
      currentPage={currentPage}
      onSearchBarChange={onSearchBarChange}
      onFilteredElements={onFilteredElements}
      onPrevPage={onPrevPage}
      onNextPage={onNextPage}
      placeholder='Ingresa el nombre de la tienda'>
      {
        onFilteredElements().map((s, i) => (
          <StoresItem
            key={s.id}
            {...s} />
        ))
      }
    </PaginatorSearchBar>
  );
};
