import { useState } from 'react';

export const usePaginatorSearchBar = ({ elements, elementsPerPage = 5, propToSearch }) => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(0);

  const onSearchBarChange = ({ target }) => {
    setCurrentPage((prevState) => 0);
    setSearch((prevState) => target.value);
  };

  const onFilteredElements = () => {
    if (search.length === 0) {
      return elements?.slice(currentPage, currentPage + elementsPerPage);
    };

    const filtered = elements.filter((e) => e[propToSearch].toLowerCase().includes(search.toLocaleLowerCase()));
    return filtered.slice(currentPage, currentPage + elementsPerPage);
  };

  const onPrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prevState) => prevState - elementsPerPage);
    }
  };

  const onNextPage = () => {
    if (elements.filter((e) => e[propToSearch].includes(search)).length > currentPage + 5) {
      setCurrentPage((prevState) => prevState + elementsPerPage);
    };
  };

  return {
    search,
    currentPage,
    elementsPerPage,
    onSearchBarChange,
    onFilteredElements,
    onPrevPage,
    onNextPage
  };
};
