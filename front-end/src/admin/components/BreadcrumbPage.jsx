import { Breadcrumbs } from 'react-daisyui';

export const BreadcrumbPage = ({ pageName, pageIcon, hidden }) => {
    return (
        <Breadcrumbs
            className='text-xs lg:text-sm'
            hidden={hidden}>
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