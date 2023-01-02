import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from "react-toastify";
import jwtDecode from 'jwt-decode'
const initialState = {
    token: localStorage.getItem("token"),
    username: "",
    email: "",
    id: "",
    registerStatus: "",
    registerError: "",
    loginStatus: "",
    loginError: "",
    userLoaded: false,
}

export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async (user) => {
        try {
            const token = await axios.post("http://localhost:3001/register", user);
            console.log(token.data)
            localStorage.setItem("token", token.data);

            return token.data;
        } catch (error) {
            console.log(error.response.data);
        }
    }
);

export const LoginUser = createAsyncThunk(
    "auth/LoginUser",
    async (user) => {
        try {
            const token = await axios.post("http://localhost:3001/login", user);
            localStorage.setItem("token", token.data);
            return token.data;

        } catch (error) {
            console.log(error.response.data);
        }
    }
);




const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loadUser(state, action) {
            const token = state.token;

            if (token) {
                const user = jwtDecode(token);
                return {
                    ...state,
                    token: token,
                    username: user.username,
                    email: user.email,
                    id: user.id,
                    userLoaded: true,
                };
            } else return { ...state, userLoaded: true };
        },
        logoutUser(state, action) {
            localStorage.removeItem("token");
            toast.warn("you logged out ", {
                position: "top-right",
                autoClose: 1000,
            })
            return {
                ...state,
                token: "",
                username: "",
                email: "",
                id: "",
                registerStatus: "",
                registerError: "",
                loginStatus: "",
                loginError: "",
                userLoaded: "false"
            };

        },
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state, action) => {
            return { ...state, registerStatus: "pending" };
        });
        builder.addCase(registerUser.fulfilled, (state, action) => {
            if (action.payload) {
                const user = jwtDecode(action.payload);
                return {
                    ...state,
                    token: action.payload,
                    username: user.username,
                    email: user.email,
                    id: user.id,
                    registerStatus: "success",
                };
            } else return state;
        });
        builder.addCase(registerUser.rejected, (state, action) => {
            return {
                ...state,
                registerStatus: "rejected",
                registerError: action.payload,
            };
        });
        builder.addCase(LoginUser.pending, (state, action) => {
            return { ...state, loginStatus: "pending" };
        });
        builder.addCase(LoginUser.fulfilled, (state, action) => {
            if (action.payload) {
                const user = jwtDecode(action.payload);
                return {
                    ...state,
                    token: action.payload,
                    username: user.username,
                    email: user.email,
                    id: user.id,
                    loginStatus: "success",
                };
            } else {
                return state;
            }
        });
        builder.addCase(LoginUser.rejected, (state, action) => {

            return {
                ...state,
                loginStatus: "rejected",
                loginError: action.payload,
            };
        });
    },
});
export const { loadUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;