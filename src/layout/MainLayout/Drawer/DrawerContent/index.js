import React from 'react';
import DashboardIconLight from "assets/icons/menus/Dashboard=Light.svg";
import DashboardIconDark from "assets/icons/menus/Dashboard=Dark.svg";
import CatalogIconLight from "assets/icons/menus/Catalog=Light.svg";
import CatalogIconDark from "assets/icons/menus/Catalog=Dark.svg";
import BlogIconLight from "assets/icons/menus/Blog=Light.svg";
import BlogIconDark from "assets/icons/menus/Blog=Dark.svg";
import PagesIconLight from "assets/icons/menus/Pages=Light.svg";
import PagesIconDark from "assets/icons/menus/Pages=Dark.svg";
import PaymentIconLight from "assets/icons/menus/Payment=Light.svg";
import PaymentIconDark from "assets/icons/menus/Payment=Dark.svg";
import UsersIconLight from "assets/icons/menus/Users=Dark.svg";
import UsersIconDark from "assets/icons/menus/Users=Light.svg";
import AddUserIconLight from "assets/icons/actions/Add=Light.svg";
import AddUserIconDark from "assets/icons/actions/Add=Dark.svg";
import NavGroup from "./Navigation/NavGroup";


const DrawerContent = () => {

    const menuItems = [
        {
            title: 'Dashboard',
            icon: {
                light: DashboardIconLight, dark: DashboardIconDark
            },
            link: '/'
        },
        {
            title: 'Catalog',
            icon: {
                light: CatalogIconLight, dark: CatalogIconDark
            },
            link: '/catalog'
        },
        {
            title: 'Blogs',
            icon: {
                light: BlogIconLight, dark: BlogIconDark
            },
            link: '/blogs'
        },
        {
            title: 'Pages',
            icon: {
                light: PagesIconLight, dark: PagesIconDark
            },
            link: '/pages'
        },
        {
            title: 'Payments',
            icon: {
                light: PaymentIconLight, dark: PaymentIconDark
            },
            link: '/payment'
        },
        {
            title: 'Users',
            icon: {
                light: UsersIconLight, dark: UsersIconDark
            },
            link: '/users',
            children: [
                {
                    title: 'Add Users',
                    icon: {
                        light: AddUserIconLight, dark: AddUserIconDark
                    },
                    link: '/users/new'
                }
            ]
        }
    ]

    return (<div className={'flex flex-col gap-[5px]'}>
        {menuItems.map((item, index) => <NavGroup key={index} item={item}/>)}
    </div>);
};

export default DrawerContent;
