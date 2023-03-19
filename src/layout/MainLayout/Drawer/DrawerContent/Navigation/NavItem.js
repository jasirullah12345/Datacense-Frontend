import React, {useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";

const NavItem = ({item}) => {
    const location = useLocation();

    const [isActive, setIsActive] = useState(isActiveLink(location, item.link));

    useEffect(() => {
        setIsActive(isActiveLink(location, item.link))
    }, [item.link, location]);

    return (
        <Link to={item.link} className={`${isActive && "text-[#1A1A1A] bg-white"} flex gap-[8px] ml-[18px] px-[20px] py-[7px] rounded-[25px] w-fit`} onMouseOver={() => setIsActive(true)} onMouseLeave={() => !isActiveLink(location, item.link) && setIsActive(false)}>
            <img src={isActive ? item.icon.dark : item.icon.light} alt=""/>
            <span className={'text-base font-semibold'}>{item.title}</span>
        </Link>
    );
};

export default NavItem;

let isActiveLink = (location, link) => {
    return location.pathname === link
}
