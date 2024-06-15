import { usePaginatorSearchBar } from '../hooks';
import { PaginatorSearchBar } from './PaginatorSearchBar';
import { OrderItem } from './OrderItem';

export const OrderList = ({ orders }) => {
    const { search, currentPage, onSearchBarChange, onFilteredElements, onPrevPage, onNextPage } = usePaginatorSearchBar({ elements: orders, propToSearch: 'shop' });

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
                onFilteredElements().map((o, i) => (
                    <OrderItem
                        key={o.id}
                        {...o} />
                ))
            }
        </PaginatorSearchBar>
    );
};