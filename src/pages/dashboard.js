import React from 'react';
import DashboardIconDark from "assets/icons/menus/Dashboard=Dark.svg";

const Dashboard = () => {
    return (
        <div className={'flex items-center justify-center flex-grow rounded-[5px]'}>
            <div className={'p-4 flex items-center gap-[20px]'}>
                <img src={DashboardIconDark} alt="" className={'w-16'}/>
                <span className={'font-bold text-2xl'}>Dashboard</span>
            </div>
        </div>
    );
};

export default Dashboard;
