import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../assets/Components/Header';

const Main = () => {
    return (
        <div className='w-[90%] mx-auto'>
            <Header></Header>
          <Outlet></Outlet>  
        </div>
    );
};

export default Main;<Outlet></Outlet>