import { lazy } from 'react';

// project import
import GuestGuard from 'utils/route-guard/GuestGuard';
import CommonLayout from 'layout/CommonLayout';
import MainLayout from "layout/MainLayout";
import AuthGuard from "utils/route-guard/AuthGuard";
import Loadable from "../components/Loadable";

// render - login
const AuthLogin = Loadable(lazy(() => import('pages/auth/login')));
const AuthRegister = Loadable(lazy(() => import('pages/auth/register')));

export const authRoutes = [
    {
        element: (
            <GuestGuard>
                <CommonLayout/>
            </GuestGuard>
        ),
        children: [
            {
                path: 'login',
                element: <AuthLogin />
            },
            {
                path: 'register',
                element: <AuthRegister />
            }
        ]
    },
    {
        element: (
            <AuthGuard>
                <MainLayout/>
            </AuthGuard>
        ),
        children: [
            // {
            //     path: '/profile',
            //     element: <Profile/>
            // }
        ]
    }
];