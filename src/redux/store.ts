import { combineReducers, configureStore } from "@reduxjs/toolkit";
import messagesSlice, { IMessage } from "./messages/messagesSlice";
import usersSlice from "./users/userSlice";
import { IUser } from "./users/types";

export interface Reducers {
    users: IUser[];
    messages: IMessage[];
}

const rootReducer = combineReducers<Reducers>({
    users: usersSlice,
    messages: messagesSlice,
});

export const store = configureStore({
    reducer: rootReducer,
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
