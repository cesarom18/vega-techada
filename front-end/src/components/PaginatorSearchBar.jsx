import { Button, Input, Pagination } from 'react-daisyui';

export const PaginatorSearchBar = ({ children, search, currentPage, onSearchBarChange, onPrevPage, onNextPage, placeholder }) => {
    return (
        <>
            <Input
                type='text'
                value={search}
                onChange={onSearchBarChange}
                placeholder={placeholder} />
            {children}
            <Pagination className='flex justify-evenly items-center mt-4'>
                <Button
                    color='ghost'
                    size='md'
                    className='bg-gray-800 hover:bg-gray-700 text-gray-50 sm:w-40 lg:mt-0'
                    onClick={onPrevPage}>
                    Anterior
                </Button>
                <span>{(currentPage / 5) + 1}</span>
                <Button
                    color='ghost'
                    size='md'
                    className='bg-gray-800 hover:bg-gray-700 text-gray-50 sm:w-40 lg:mt-0'
                    onClick={onNextPage}>
                    Siguiente
                </Button>
            </Pagination>
        </>
    )
};