import React, {useEffect, useMemo, useState} from 'react';
import Profile from "./Profile";
import {useLocation} from "react-router-dom";
import {capitalize} from "utils/text-formator";
import MenuIconLight from "assets/icons/Menu=Light.svg";

const HeaderContent = ({isMobile, setDrawerOpened}) => {
    const location = useLocation();

    const [title, setTitle] = useState(capitalize(process.env.REACT_APP_APP_NAME));

    const pageTitles = useMemo(() => ({
        '/': 'Dashboard',
        '/catalog': 'Catalog',
        '/blogs': 'Blogs',
        '/pages': 'Pages',
        '/payment': 'Payments',
        '/users': 'All Users',
        '/users/new': 'Add Users',
        '/profile': 'Profile'
    }), []);

    useEffect(() => {
        setTitle(pageTitles[location.pathname])
    }, [location, pageTitles]);


    return (
        <div className={'w-full flex justify-between items-center'}>
            <div className={'flex gap-[20px] items-center'}>
                {isMobile && <img src={MenuIconLight} alt="" className={'h-6 cursor-pointer'} onClick={(e) => {
                    e.stopPropagation()
                    setDrawerOpened(true)
                }}/>}
                <span className={'font-semibold text-2xl'}>{title}</span>
            </div>
            <Profile/>
        </div>
    );
};

export default HeaderContent;
