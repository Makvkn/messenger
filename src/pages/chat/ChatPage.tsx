import React from "react";
import styles from "./ChatPage.module.css";

const ChatPage = () => {
    return (
        <div className={styles.chatPage}>
            <div className={styles.chatHeader}></div>
            <div className={styles.messagesHistory}></div>
            <div className={styles.chatFooter}></div>
        </div>
    );
};

export default ChatPage;
