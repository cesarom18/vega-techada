import { useState } from 'react';

export const usePaginatorSearchBar = ({ elements, propToSearch }) => {
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(0);

    const onSearchBarChange = ({ target }) => {
        setCurrentPage((prevState) => 0);
        setSearch((prevState) => target.value);
    };

    const onFilteredElements = () => {
        if (search.length === 0) {
            return elements.slice(currentPage, currentPage + 5);
        };

        const filtered = elements.filter((e) => e[propToSearch].toLowerCase().includes(search.toLocaleLowerCase()));
        return filtered.slice(currentPage, currentPage + 5);
    };

    const onPrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage((prevState) => prevState - 5);
        }
    };

    const onNextPage = () => {
        if (elements.filter((e) => e[propToSearch].includes(search)).length > currentPage + 5) {
            setCurrentPage((prevState) => prevState + 5);
        };
    };

    return {
        search,
        currentPage,
        onSearchBarChange,
        onFilteredElements,
        onPrevPage,
        onNextPage
    };
};