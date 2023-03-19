import React, {useState} from 'react';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import LogoutIconDark from 'assets/icons/actions/Logout=Dark.svg';
import UserIconDark from 'assets/icons/User=Dark.svg';
import useAuth from "hooks/useAuth";
// eslint-disable-next-line no-unused-vars
import {Link} from "react-router-dom";

const Profile = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const {logout} = useAuth();


    return (
        <div className={'flex items-center gap-[8px] cursor-pointer relative'} onClick={() => setShowDropdown(true)}>
            <img src="/images/profile.svg" alt="" className={'w-12 h-12 object-contain rounded-full'}/>
            <span className={'font-semibold text-base'}>Admin</span>

            {showDropdown && <ClickAwayListener onClickAway={() => setShowDropdown(false)}>
                <div onClick={(e) => e.stopPropagation()}
                    className={'absolute top-[120%] right-0 w-[200px] bg-white rounded-[5px] border-[1px] border-primary shadow-lg shadow-primary/40 py-[10px] flex flex-col gap-[10px] z-10 cursor-auto text-black'}>

                    {/*Links options*/}
                    <Link to={'profile'} onClick={() => setShowDropdown(false)}
                          className={'flex items-center gap-[8px] cursor-pointer p-2 px-[20px] hover:bg-primary/10'}>
                        <img src={UserIconDark} alt="" className={'w-8 h-8 p-1.5 object-contain'}/>
                        <span className={'font-semibold text-base'}>Profile</span>
                    </Link>

                    {/*Logout*/}
                    <div className={'flex items-center gap-[8px] cursor-pointer p-2 px-[20px] hover:bg-primary/10'}
                         onClick={() => {
                             setShowDropdown(false);
                             logout();
                         }}>
                        <img src={LogoutIconDark} alt="" className={'w-8 h-8 p-1.5 object-contain'}/>
                        <span className={'font-semibold text-base'}>Logout</span>
                    </div>

                </div>
            </ClickAwayListener>}
        </div>);
};

export default Profile;
