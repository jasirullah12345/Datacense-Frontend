import React from 'react';
import TickIcon from "assets/icons/Tick=Dark.svg";

const SuccessDialog = ({message}) => {
    return (
        <div className={'fixed z-[999] inset-0 bg-black/25 flex items-center justify-center'}>
            <div className={'bg-white rounded-[5px] w-[90%] max-w-[440px] py-[46px] px-[68px] flex flex-col items-center '}>
                <img src={TickIcon} alt=""/>
                <span className={'text-[#14A44D] font-medium text-2xl mt-[16px] mb-[4px]'}>Success!!</span>
                <span className={'text-base font-normal'}>{message}</span>
            </div>
        </div>
    );
};

export default SuccessDialog;
