import React, {useEffect, useMemo, useState} from 'react';
import Profile from "./Profile";
import {useLocation} from "react-router-dom";
import {capitalize} from "../../../../utils/text-formator";

const HeaderContent = () => {
    const location = useLocation();

    const [title, setTitle] = useState(capitalize(process.env.REACT_APP_APP_NAME));

    const pageTitles = useMemo(() => ({
        '/': 'Dashboard',
        '/users': 'All Users',
        '/users/new': 'Add Users'
    }), []);

    useEffect(() => {
      setTitle(pageTitles[location.pathname])
    }, [location, pageTitles]);


    return (
        <div className={'w-full flex justify-between items-center'}>
            <span className={'font-semibold text-2xl'}>{title}</span>
            <Profile/>
        </div>
    );
};

export default HeaderContent;
