import { Button, Divider } from 'react-daisyui';
import { TbFilter } from 'react-icons/tb';

import { FilterItem } from './FilterItem';

export const FilterList = ({ filters }) => {
    return (
        <>
            <div className='flex justify-between items-center'>
                <span className='text-lg uppercase font-semibold'>Filtros</span>
                <span className='text-gray-800 hover:text-gray-600 underline cursor-pointer'>Borrar Filtros</span>
            </div>
            <Divider className='my-2' />
            <Button
                size='md'
                color='neutral'
                fullWidth
                endIcon={<TbFilter />}
                className='mb-4'>
                Filtrar
            </Button>
            <div className='flex flex-wrap gap-2'>
                {
                    filters.map((f, i) => (
                        <FilterItem
                            key={i}
                            {...f} />
                    ))
                }
            </div>
        </>
    );
};