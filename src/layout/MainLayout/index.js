import React, {useEffect, useState} from 'react';
import {useWindowSize} from "@react-hook/window-size";
import {Outlet, useLocation} from "react-router-dom";
import Drawer from "./Drawer";
import Header from "./Header";
import config from "config";

const MainLayout = () => {
    const location = useLocation()
    const [screenWidth, screenHeight] = useWindowSize();

    const [drawerOpened, setDrawerOpened] = useState(false);
    const [isMobile, setIsMobile] = useState(isMobileScreen(screenWidth, screenHeight));

    useEffect(() => {
        setIsMobile(isMobileScreen(screenWidth, screenHeight));
    }, [screenWidth, screenHeight]);

    useEffect(() => {
      setDrawerOpened(false)
    }, [location]);

    return (
        <div className={'flex h-screen w-full relative'}>
            <Drawer isMobile={isMobile} drawerOpened={drawerOpened} setDrawerOpened={setDrawerOpened}/>
            <div className={'flex flex-col gap-[26px] flex-grow overflow-x-hidden py-[26px] px-[30px]'}>
                <Header isMobile={isMobile} setDrawerOpened={setDrawerOpened}/>
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;

const isMobileScreen = (width, height) => {
    return width <= config.mobileSize;
}