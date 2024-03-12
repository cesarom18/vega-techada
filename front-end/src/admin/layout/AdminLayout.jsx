import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-daisyui';
import { TbMenu2 } from 'react-icons/tb';

import { Header } from '../components/header';
import { Sidebar } from '../components/sidebar';
import { BreadcrumbPage } from '../components/BreadcrumbPage';

export const AdminLayout = ({ children, breadPageHidden, breadPageIcon, breadPageText, breadLinkHidden, breadLinkPath, breadLinkText }) => {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebarVisible = useCallback(() => {
        setSidebarVisible((prevState) => !prevState);
    }, []);

    return (
        <div className='bg-gray-200 grid grid-cols-6 min-h-screen'>
            <div className={`col-span-1  fixed z-20 top-0 ${(sidebarVisible) ? '-left-0' : '-left-full'} lg:sticky self-start overflow-y-scroll transition-all w-full`}>
                <Sidebar toggleSidebarVisible={toggleSidebarVisible} />
            </div>
            <div className='col-span-6 lg:col-span-5'>
                <Header toggleSidebarVisible={toggleSidebarVisible} />
                <main className='p-8 lg:p-12'>
                    <div className='flex flex-col md:flex-row justify-between items-center mb-12'>
                        <BreadcrumbPage
                            pageName={breadPageText}
                            pageIcon={breadPageIcon}
                            hidden={breadPageHidden} />
                        <Link
                            to={breadLinkPath}
                            className={`${(breadLinkHidden) && 'hidden'} btn btn-md btn-ghost bg-gray-800 hover:bg-gray-700 text-gray-50 w-full md:w-40 mt-4 lg:mt-0`}>
                            {breadLinkText}
                        </Link>
                    </div>
                    {children}
                </main>
            </div>
            <Button
                color='ghost'
                shape='circle'
                className='fixed z-10 bottom-5 right-5 lg:hidden bg-gray-800 hover:bg-gray-700 text-gray-50 text-2xl'
                onClick={toggleSidebarVisible}>
                <TbMenu2 />
            </Button>
        </div>
    );
};