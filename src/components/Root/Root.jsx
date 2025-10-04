import React from 'react';
import Navbar from '../Navbar/Navbar';

import Home from '../Home/Home';
import { Outlet } from 'react-router';


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            
            {/* <Header></Header> */}
        </div>
    );
};

export default Root;