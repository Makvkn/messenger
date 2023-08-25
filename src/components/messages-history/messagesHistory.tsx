import React from "react";
import styles from "./messagesHistory.module.css";
import Message from "../message/Message";
import { useSelector } from "react-redux";
import { allMessages, IMessage } from "../../redux/messages/messagesSlice";

const MessagesHistory = () => {
    const messages = useSelector(allMessages);
    return (
        <div className={styles.messagesHistory}>
            {messages.map((el: IMessage, i: number) => (
                <Message messText={el.text} key={i} />
            ))}
        </div>
    );
};

export default MessagesHistory;
