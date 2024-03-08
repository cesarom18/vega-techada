import { Checkbox, Table } from 'react-daisyui';

export const MyProductTableItem = ({ id, name, offerType, category, availability, price }) => {
    return (
        <Table.Row>
            <Checkbox color='neutral' />
            <div>{id}</div>
            <div>{name}</div>
            <div>{offerType}</div>
            <div>{category}</div>
            <div>{availability}</div>
            <div>${price}</div>
        </Table.Row>
    );
};