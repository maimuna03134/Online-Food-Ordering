import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Home from '../Home/Home';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Home></Home>
            {/* <Header></Header> */}
        </div>
    );
};

export default Root;