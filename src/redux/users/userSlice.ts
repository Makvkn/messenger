import { createSlice } from "@reduxjs/toolkit";

export interface UsersState {
    users: IUser[];
}

export interface IUser {
    id: number;
    username: string;
    lastMessage: string;
}

const initialState: IUser[] = [
    { id: 1, username: "Albert Einstein", lastMessage: "I'm Genius" },
    { id: 2, username: "Leonardo da Vinci", lastMessage: "I'm Draw Ranger" },
    { id: 3, username: "Peter Parker", lastMessage: "I am Spider-man" },
];

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        },
        removeLastUser: (state, action) => {
            state.filter((el) => el.id !== action.payload);
        },
    },
});

export default usersSlice.reducer;
export const allUsers = (state: UsersState) => state.users;
