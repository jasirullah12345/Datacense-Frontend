import {createSlice} from '@reduxjs/toolkit';
import axios from "utils/axios";
import {dispatch} from "../index";

const initialState = {
    error: null,
    users: [],
    usersLoading: false,
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
        }
    }
});

export default users.reducer;

// ==============================|| USERS - API CALL ||============================== //

export function getAllUsers(page, limit, search) {
    return async () => {
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
