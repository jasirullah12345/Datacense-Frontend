import React from 'react';
import DrawerHeader from "./DrawerHeader";
import DrawerContent from "./DrawerContent";

const Drawer = () => {
    return (
        <div className={'flex flex-col w-[240px] bg-primary text-white px-[18px] py-[40px]'}>
            <DrawerHeader/>
            <DrawerContent/>
        </div>
    );
};

export default Drawer;
