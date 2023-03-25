import {createSlice} from '@reduxjs/toolkit';
import axios from "utils/axios";

const initialState = {
    error: null,
    users: [],
    usersLoading: false,
    grandPaUsers: [],
    grandPaUsersLoading: false,
    usersWithChildrens: {},
    usersWithChildrensLoading: false,
    totalRecords: 0,
    currentPage: 1,
};

// ==============================|| SLICE - USERS ||============================== //

const users = createSlice({
    name: 'users',
    initialState,
    reducers: {
        // HAS ERROR
        hasError(state, action) {
            state.error = action.payload;
        },

        // SET USERS
        setUsers(state, action) {
            state.users = action.payload;
        },

        // SET USERS LOADING
        setUsersLoading(state, action) {
            state.usersLoading = action.payload;
        },

        // SET TOTAL RECORDS
        setTotalRecords(state, action) {
            state.totalRecords = action.payload;
        },

        // SET CURRENT PAGE
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
        },

        // SET GRANDPA USERS
        setGrandPaUsers(state, action) {
            state.grandPaUsers = action.payload;
        },

        // SET GRANDPA USERS LOADING
        setGrandPaUsersLoading(state, action) {
            state.grandPaUsersLoading = action.payload;
        },

        // SET USERS WITH CHILDRENS
        setUsersWithChildrens(state, action) {
            state.usersWithChildrens = action.payload;
        },

        // SET USERS WITH CHILDRENS LOADING
        setUsersWithChildrensLoading(state, action) {
            state.usersWithChildrensLoading = action.payload;
        }
    }
});

export default users.reducer;

// ==============================|| USERS - API CALL ||============================== //

export function getAllUsers(page, limit, search) {
    return async (dispatch) => {
        users.actions.hasError(null);
        dispatch(users.actions.setUsersLoading(true));
        try {
            const {data, totalRecords, currentPage} = (await axios.get('/users',{
                params: {
                    page,
                    limit,
                    search
                }
            })).data;

            dispatch(users.actions.setUsers(data));
            dispatch(users.actions.setTotalRecords(totalRecords));
            dispatch(users.actions.setCurrentPage(currentPage));
        } catch (error) {
            dispatch(users.actions.hasError(error));
        }
        dispatch(users.actions.setUsersLoading(false));
    };
}

export function getGrandPa() {
    return async (dispatch) => {
        users.actions.hasError(null);
        dispatch(users.actions.setGrandPaUsersLoading(true));
        try {
            let grandpas = (await axios.get('/users/with-children')).data.data;

            grandpas = grandpas.map((grandpa) => {
                return {
                    value: grandpa._id,
                    name: grandpa.name
                }
            })

            dispatch(users.actions.setGrandPaUsers(grandpas));
        } catch (error) {
            dispatch(users.actions.hasError(error));
        }
        dispatch(users.actions.setGrandPaUsersLoading(false));
    };
}

export function getUsersWithChildrens(userId) {
    return async (dispatch) => {
        users.actions.hasError(null);
        dispatch(users.actions.setUsersWithChildrensLoading(true));
        try {
            let userWithChildrens = (await axios.get(`/users/${userId}/populated-children`)).data.data;

            dispatch(users.actions.setUsersWithChildrens(userWithChildrens));
        } catch (error) {
            dispatch(users.actions.hasError(error));
        }
        dispatch(users.actions.setUsersWithChildrensLoading(false));
    };
}

export function createUsers(user) {
    return async (dispatch) => {
        users.actions.hasError(null);
        dispatch(users.actions.setUsersWithChildrensLoading(true));
        try {
            await axios.post(`/users`,{user});
        } catch (error) {
            dispatch(users.actions.hasError(error));
        }
        dispatch(users.actions.setUsersWithChildrensLoading(false));
    };
}