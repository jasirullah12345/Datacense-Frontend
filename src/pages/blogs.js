import React from 'react';
import BlogIconDark from "assets/icons/menus/Blog=Dark.svg";

const Blogs = () => {
    return (
        <div className={'flex items-center justify-center flex-grow rounded-[5px]'}>
            <div className={'p-4 flex items-center gap-[20px]'}>
                <img src={BlogIconDark} alt="" className={'w-16'}/>
                <span className={'font-bold text-2xl'}>Blogs</span>
            </div>
        </div>
    );
};

export default Blogs;
