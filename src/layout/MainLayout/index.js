import React from 'react';
import {Outlet} from "react-router-dom";
import Drawer from "./Drawer";
import Header from "./Header";

const MainLayout = () => {
    return (
        <div className={'flex h-screen w-full'}>
            <Drawer/>
            <div className={'flex flex-col gap-[26px] flex-grow py-[26px] px-[30px]'}>
                <Header/>
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;
