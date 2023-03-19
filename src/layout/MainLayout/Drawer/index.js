import React from 'react';
import DrawerHeader from "./DrawerHeader";
import DrawerContent from "./DrawerContent";
import ClickAwayListener from "@mui/base/ClickAwayListener";

const Drawer = ({isMobile, drawerOpened, setDrawerOpened}) => {
    return (
        <ClickAwayListener onClickAway={() => isMobile && drawerOpened === true && setDrawerOpened(false)}>
            <div
                className={`flex flex-col w-[240px] min-h-screen bg-primary text-white px-[18px] py-[40px] transition-all duration-300 ${isMobile && 'absolute -translate-x-full'} ${drawerOpened && 'translate-x-0'}`}>
                <DrawerHeader/>
                <DrawerContent/>
            </div>
        </ClickAwayListener>
    );
};

export default Drawer;
