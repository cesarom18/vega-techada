import { Checkbox, Collapse } from 'react-daisyui';

export const FilterItem = ({ title, elements }) => {
    return (
        <Collapse
            icon='arrow'
            className='border-b-2 rounded-none'>
            <Collapse.Title className='pl-0'>{title}</Collapse.Title>
            <Collapse.Content>
                <ul className='flex flex-col gap-4'>
                    {
                        elements?.map((e, i) => (
                            <li
                                key={i}
                                className='flex items-center'>
                                <Checkbox className='mr-2' /> {e}
                            </li>
                        ))
                    }
                </ul>
            </Collapse.Content>
        </Collapse>
    );
};