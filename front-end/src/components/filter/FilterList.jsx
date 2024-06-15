import { Button, Divider } from 'react-daisyui';
import { TbFilter } from 'react-icons/tb';

import { FilterItem } from './FilterItem';
import { useState } from 'react';

export const FilterList = ({ filters, initialElements, elements, setElements }) => {
    const [appliedFilters, setAppliedFilters] = useState([]);

    const onFilterElements = () => {
        if (appliedFilters.length === 0) {
            return setElements(initialElements);
        };

        setElements(initialElements.filter((e) => {
            return appliedFilters.includes(e.category)
        }));
    };

    return (
        <>
            <div className='flex justify-between items-center'>
                <span className='text-lg uppercase font-semibold'>Filtros</span>
            </div>
            <Divider className='my-2' />
            <Button
                size='md'
                color='neutral'
                fullWidth
                endIcon={<TbFilter />}
                className='mb-4'
                disabled={(appliedFilters.length === 0 && elements.length === initialElements.length) ? true : false}
                onClick={onFilterElements}>
                Filtrar
            </Button>
            <div className='flex flex-wrap gap-2'>
                {
                    filters.map((f, i) => (
                        <FilterItem
                            key={i}
                            setAppliedFilters={setAppliedFilters}
                            {...f} />
                    ))
                }
            </div>
        </>
    );
};