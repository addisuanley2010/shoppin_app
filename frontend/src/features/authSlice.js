import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
const initialState = {
    token: localStorage.getItem("token"),
    name: "",
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
    async (user, { rejectWithValue }) => {
        try {
            const token = await axios.post("http://localhost:3001/register", user);
            console.log(token.data)
            localStorage.setItem("token", token.data);

            return token.data;
        } catch (error) {
            console.log(error.response.data);
            // return rejectWithValue(error.response.data);
        }
    }
);




const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
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
                    name: user.name,
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
    },
});

export default authSlice.reducer;