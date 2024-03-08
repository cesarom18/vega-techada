import { Breadcrumbs } from 'react-daisyui';
import { TbShoppingCart } from 'react-icons/tb';

export const BreadcrumbPage = ({ pageName, pageIcon }) => {
    return (
        <Breadcrumbs className='text-xs lg:text-sm'>
            <Breadcrumbs.Item>
                Panel Administracion
            </Breadcrumbs.Item>
            <Breadcrumbs.Item className='flex items-center gap-2'>
                {pageIcon}
                {pageName}
            </Breadcrumbs.Item>
        </Breadcrumbs>
    );
};