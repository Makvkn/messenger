import React from "react";
import ChatItem from "../../components/chat/Chat";
import styles from "./ChatsPage.module.css";
import { useSelector } from "react-redux";
import { allUsers } from "../../redux/users/userSlice";
import { IUser } from "../../redux/users/types";

const ChatsPage = () => {
    const users = useSelector(allUsers);
    console.log(users);
    return (
        <div className={styles.chatPage}>
            <h1>Chats</h1>
            <div className={styles.inputSearchContainer}>
                <input type="text" placeholder="Search..." className={styles.inputSearch} />
            </div>
            <div className={styles.chatList}>
                {users.map((el: IUser, i: number) => (
                    <ChatItem user={el} key={i} />
                ))}
            </div>
        </div>
    );
};

export default ChatsPage;
