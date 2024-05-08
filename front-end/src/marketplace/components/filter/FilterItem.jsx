import { Accordion, Checkbox } from 'react-daisyui';

export const FilterItem = ({ setAppliedFilters, name, options }) => {
    const onCheckboxChange = (event) => {
        const textContent = event.target.nextElementSibling.textContent;

        if (event.target.checked) {
            setAppliedFilters((prevState) => [...prevState, textContent]);
        } else {
            setAppliedFilters((prevState) => prevState.filter((i) => i !== textContent));
        };
    };

    return (
        <Accordion
            icon='arrow'
            className='border'>
            <Accordion.Title className='text-sm lg:text-lg '>
                {name}
            </Accordion.Title>
            <Accordion.Content>
                <ul>
                    {
                        options.map((o, i) => (
                            <li key={i} className='flex items-center justify-start gap-2 mb-4'>
                                <Checkbox onChange={onCheckboxChange} />
                                <span className='text-sm'>{o}</span>
                            </li>
                        ))
                    }
                </ul>
            </Accordion.Content>
        </Accordion>
    );
};