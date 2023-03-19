import React from 'react';
import UserIconDark from 'assets/icons/User=Dark.svg';

const Profile = () => {
    return (
        <div className={'flex items-center justify-center flex-grow rounded-[5px]'}>
            <div className={'p-4 flex items-center gap-[20px]'}>
                <img src={UserIconDark} alt="" className={'w-10'}/>
                <span className={'font-bold text-2xl'}>Profile</span>
            </div>
        </div>
    );
};

export default Profile;
