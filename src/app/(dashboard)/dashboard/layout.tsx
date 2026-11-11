import type { Metadata } from 'next';
import React from 'react';

import SideBar from './_component/sideBar';

export const metadata: Metadata = {
  title: 'Dashboard | SportNest',
};

const Layout = ({children} : {children : React.ReactNode}) => {
    return (
        <div className="min-h-full">
            <SideBar />
            <main className="md:pl-64">
                <div className="mx-auto max-w-6xl p-4 sm:p-6 lg:p-8">{children}</div>
            </main>
        </div>
    );
};

export default Layout;
