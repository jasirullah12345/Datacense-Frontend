import {createSlice} from '@reduxjs/toolkit';
import axios from "utils/axios";
import {dispatch} from "../index";

const initialState = {
    error: null,
    users: [],
    usersLoading: false,
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
        }
    }
});

export default users.reducer;

// ==============================|| USERS - API CALL ||============================== //

export function getAllUsers() {
    return async () => {
        dispatch(users.actions.setUsersLoading(true));
        try {
            const response = await axios.get('/persons');
            dispatch(users.actions.setUsers(response.data));
        } catch (error) {
            dispatch(users.actions.hasError(error));
        }
        dispatch(users.actions.setUsersLoading(false));
    };
}
