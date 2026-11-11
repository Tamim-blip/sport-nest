import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import React from 'react';

const Layout = ({children} : {children : React.ReactNode}) => {
    return (
        <>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </>
    );
};

export default Layout;
