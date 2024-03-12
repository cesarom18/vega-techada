import { Button, Input, Pagination } from 'react-daisyui';
import { TbSearch } from 'react-icons/tb'

export const PaginatorSearchBar = ({ children, search, currentPage, onSearchBarChange, onPrevPage, onNextPage, placeholder }) => {
    return (
        <>
            <div className='relative'>
                <Input
                    type='text'
                    value={search}
                    className='pl-8 w-full'
                    onChange={onSearchBarChange}
                    placeholder={placeholder} />
                <TbSearch className='absolute top-[16px] left-3 text-gray-700' />
            </div>
            {children}
            <Pagination className='flex justify-between lg:justify-evenly items-center mt-4'>
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