import React, { useState } from "react";
import ChatItem from "../../components/chat/Chat";
import styles from "./ChatsPage.module.css";

export interface IUser {
    id: number;
    username: string;
    lastMessage: string;
}

const ChatsPage = () => {
    const [users] = useState<IUser[]>([
        { id: 1, username: "Marry Jane", lastMessage: "Hello, my Sweety" },
        { id: 2, username: "Leonardo da Vinci", lastMessage: "I'm drawing" },
        { id: 3, username: "Mona Lisa", lastMessage: "My lips is beautiful" },
    ]);
    return (
        <div className={styles.chatPage}>
            <h1>Chats</h1>
            <div className={styles.inputSearchContainer}>
                <input type="text" placeholder="Search..." className={styles.inputSearch} />
            </div>
            <div className={styles.chatList}>
                {users.map((el, i) => (
                    <ChatItem user={el} key={i} />
                ))}
            </div>
        </div>
    );
};

export default ChatsPage;
