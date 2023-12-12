import React from 'react';
import AdminHeader from './AdminHeader';
import NewFooter from './NewFooter';

const Container = ({ children }) => {
    return (
        <div>
            <AdminHeader />
            <div>{children}</div>
            <NewFooter />
        </div>
    );
};

export default Container;
