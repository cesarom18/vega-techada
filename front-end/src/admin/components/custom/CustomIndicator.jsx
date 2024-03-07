import { Badge, Indicator } from 'react-daisyui';

export const CustomIndicator = ({ number, element }) => {
    return (
        <Indicator >
            <Badge className={`${Indicator.Item.className({ horizontal: 'end' })} bg-gray-600 text-sm border-gray-600 text-gray-50 px-[4px]`}>
                {(number > 5) ? '+5' : number}
            </Badge>
            {element}
        </Indicator>
    );
};