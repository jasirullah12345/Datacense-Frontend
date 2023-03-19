import React, {useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import NavItem from "./NavItem";

const NavGroup = ({item}) => {
    const location = useLocation();

    const [opened, setOpened] = useState(false);
    const [isActive, setIsActive] = useState(isActiveLink(location, item.link));

    useEffect(() => {
      setIsActive(isActiveLink(location, item.link))
    }, [item.link, location]);


    return (
        <div className={'flex flex-col gap-[5px]'} onMouseOver={() => setIsActive(true)}
             onMouseLeave={() => !isActiveLink(location, item.link) && setIsActive(false)}>
            <Link to={item.link}
                  className={`${isActive && "text-[#1A1A1A] bg-white"} flex gap-[8px] px-[17px] py-[13px] rounded-[25px]`}
                  onClick={() => setOpened(!opened)}>
                <img src={isActive ? item.icon.dark : item.icon.light} alt=""/>
                <span className={'text-base font-semibold'}>{item.title}</span>
            </Link>
            {item.children && (opened || isActive) && item.children.map((child, index) => <NavItem key={index}
                                                                                                   item={child}/>)}
        </div>
    );
};

export default NavGroup;

let isActiveLink = (location, link) => {
    return "/" + location.pathname.split('/')[1] === link
}
