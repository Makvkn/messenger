import React from "react";
import styles from "./messagesHistory.module.css";
import Message from "../message/Message";

const MessagesHistory = () => {
    return (
        <div className={styles.messagesHistory}>
            <Message />
            <Message />
            <Message />
            <Message />
        </div>
    );
};

export default MessagesHistory;
