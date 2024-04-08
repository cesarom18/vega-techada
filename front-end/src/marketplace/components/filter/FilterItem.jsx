import { Accordion, Checkbox } from 'react-daisyui';

export const FilterItem = ({ name, options }) => {
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
                                <Checkbox  />
                                <span className='text-sm'>{o}</span>
                            </li>
                        ))
                    }
                </ul>
            </Accordion.Content>
        </Accordion>
    );
};