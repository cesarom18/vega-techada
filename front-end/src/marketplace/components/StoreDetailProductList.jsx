import { usePaginatorSearchBar } from '../../hooks';
import { PaginatorSearchBar } from '../../components/PaginatorSearchBar';
import { StoreDetailProductItem } from '../components/StoreDetailProductItem';

export const StoreDetailProductList = ({ products }) => {
    const { search, currentPage, onSearchBarChange, onFilteredElements, onPrevPage, onNextPage } = usePaginatorSearchBar({ elements: products, propToSearch: 'name' });

    return (
        <PaginatorSearchBar
            search={search}
            currentPage={currentPage}
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