import React from 'react';
import PagesIconDark from "assets/icons/menus/Pages=Dark.svg";

const Pages = () => {
    return (
        <div className={'flex items-center justify-center flex-grow rounded-[5px]'}>
            <div className={'p-4 flex items-center gap-[20px]'}>
                <img src={PagesIconDark} alt="" className={'w-16'}/>
                <span className={'font-bold text-2xl'}>Pages</span>
            </div>
        </div>
    );
};

export default Pages;
