import {lazy} from "react";
import Loadable from "../components/Loadable";

// Users Routes
const NewUser = Loadable(lazy(() => import('pages/users/new')));
const UserList = Loadable(lazy(() => import('pages/users/list')));

export const usersRoutes = [
    {
        path: '/users',
        children: [
            {
                index: true,
                element: <UserList/>
            },
            {
                path: 'new',
                element: <NewUser/>
            },
        ]
    }
];