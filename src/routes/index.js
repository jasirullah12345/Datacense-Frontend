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