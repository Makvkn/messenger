import { createSlice } from "@reduxjs/toolkit";

export interface Messages {
    messages: IMessage[];
}

export interface IMessage {
    id: number;
    fromId: number;
    toId: number;
    text: string;
    date: Date;
    read: boolean;
}

const initialState: IMessage[] = [
    { id: 1, fromId: 1, toId: 4, text: "lol", date: new Date(), read: true },
    { id: 2, fromId: 2, toId: 3, text: "lol", date: new Date(), read: true },
    { id: 3, fromId: 3, toId: 2, text: "lol", date: new Date(), read: true },
    { id: 4, fromId: 4, toId: 1, text: "lol", date: new Date(), read: true },
];

console.log(initialState);
export const messagesSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        sendMess: (state, action) => {
            state.push(action.payload);
        },
        deleteMess: (state, action) => {
            state.filter((el: IMessage) => el.id !== action.payload);
        },
    },
});
export default messagesSlice.reducer;

export const allMessages = (state: Messages) => state.messages;
export const { sendMess, deleteMess } = messagesSlice.actions;
