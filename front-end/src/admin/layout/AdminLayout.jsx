import { useCallback, useState } from 'react';
import { Button } from 'react-daisyui';
import { TbMenu2 } from 'react-icons/tb';

import { Header } from '../components/header';
import { Sidebar } from '../components/sidebar';

export const AdminLayout = ({ children }) => {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebarVisible = useCallback(() => {
        setSidebarVisible((prevState) => !prevState);
    }, []);

    return (
        <div className='bg-gray-200 grid grid-cols-6 relative min-h-screen'>
            <div className={`col-span-1 fixed z-10 top-0 ${(sidebarVisible) ? '-left-0' : '-left-full'} lg:static overflow-y-scroll transition-all w-full h-full`}>
                <Sidebar toggleSidebarVisible={toggleSidebarVisible} />
            </div>
            <div className='col-span-6 lg:col-span-5 relative'>
                <Header toggleSidebarVisible={toggleSidebarVisible} />
                <main className='p-8 lg:p-12'>
                    {children}
                </main>
            </div>
            <Button
                color='ghost'
                className='flex lg:hidden absolute bottom-5 right-5 bg-gray-800 hover:bg-gray-700 text-gray-50 text-2xl btn-circle '
                onClick={toggleSidebarVisible}>
                <TbMenu2 />
            </Button>
        </div>
    );
};