import React from 'react';
import PaymentIconDark from "assets/icons/menus/Payment=Dark.svg";

const Pages = () => {
    return (
        <div className={'flex items-center justify-center flex-grow rounded-[5px]'}>
            <div className={'p-4 flex items-center gap-[20px]'}>
                <img src={PaymentIconDark} alt="" className={'w-16'}/>
                <span className={'font-bold text-2xl'}>Payments</span>
            </div>
        </div>
    );
};

export default Pages;
