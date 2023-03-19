import React from 'react';
import HeaderContent from "./HeaderContent";

const Header = ({isMobile, setDrawerOpened}) => {
    return (
        <div className={'bg-primary text-white py-[22px] px-[30px] rounded-[5px] transition-all duration-200'}>
            <HeaderContent isMobile={isMobile} setDrawerOpened={setDrawerOpened}/>
        </div>
    );
};

export default Header;
