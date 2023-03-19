import React from 'react';
import HeaderContent from "./HeaderContent";

const Header = () => {
    return (
        <div className={'bg-primary text-white py-[22px] px-[30px] rounded-[5px]'}>
            <HeaderContent/>
        </div>
    );
};

export default Header;
