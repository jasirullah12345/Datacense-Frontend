import {lazy} from "react";
import {useRoutes} from "react-router-dom";

// project import
import MainLayout from 'layout/MainLayout';
import AuthGuard from 'utils/route-guard/AuthGuard';

// app import
import {usersRoutes} from "./user";
import {authRoutes} from "./auth";
import Loadable from "../components/Loadable";

const Dashboard = Loadable(lazy(() => import('pages/dashboard')));
const Catalog = Loadable(lazy(() => import('pages/catalogs')));
const Blogs = Loadable(lazy(() => import('pages/blogs')));
const Pages = Loadable(lazy(() => import('pages/pages')));
const Payments = Loadable(lazy(() => import('pages/payments')));
const MaintenanceError = Loadable(lazy(() => import('pages/maintenance/404')));

export default function ThemeRoutes() {
    return useRoutes([
        {
            element: (
                <AuthGuard>
                    <MainLayout/>
                </AuthGuard>
            ),
            children: [
                {
                    path: "/",
                    element: <Dashboard/>,
                },
                {
                    path: "/catalog",
                    element: <Catalog/>,
                },
                {
                    path: "/blogs",
                    element: <Blogs/>,
                },
                {
                    path: "/pages",
                    element: <Pages/>,
                },
                {
                    path: "/payment",
                    element: <Payments/>,
                },
                ...usersRoutes,
            ]
        },
        ...authRoutes,
        {
            path: '*',
            element: <MaintenanceError/>
        }
    ]);
}