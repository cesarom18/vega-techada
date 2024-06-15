import { usePaginatorSearchBar } from '../hooks';
import { PaginatorSearchBar } from './PaginatorSearchBar';
import { StoreDetailProductItem } from '../components/StoreDetailProductItem';

export const StoreDetailProductList = ({ products }) => {
    const { search, currentPage, elementsPerPage, onSearchBarChange, onFilteredElements, onPrevPage, onNextPage } = usePaginatorSearchBar({ elements: products, elementsPerPage: 6 ,propToSearch: 'name' });

    return (
        <PaginatorSearchBar
            search={search}
            currentPage={currentPage}
            elementsPerPage={elementsPerPage}
            onSearchBarChange={onSearchBarChange}
            onFilteredElements={onFilteredElements}
            onPrevPage={onPrevPage}
            onNextPage={onNextPage}
            placeholder='Ingrese el nombre del producto'>
            <div className='grid grid-cols-12 gap-4'>
                {
                    onFilteredElements().map((s) => (
                        <StoreDetailProductItem
                            key={s.id}
                            {...s} />
                    ))
                }
            </div>
        </PaginatorSearchBar>
    );
};